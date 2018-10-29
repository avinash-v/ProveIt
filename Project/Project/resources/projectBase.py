from flask import Flask, jsonify, request
import flask_cors
from flask_restful import Resource,reqparse,fields,marshal
from Project.models import Group, ResearchGroup, ProjectGroup, UserToGroup, User, UserProfile
from flask_login import current_user, login_user, logout_user, login_required
import json
from flask_cors import CORS,cross_origin 
from Project import db


#The data and methods for projects:
    #Get elementary data on the project - ProjectName,domain,owner,subowner, members,abstract, grouptype, (if projectgroup): researchgroup[if any], topic
    #Add member to Group(if owner of group)[PUT]
    #Get groups of user, two methods? for researchgroups and project groups separately?
    #Change Details of project[PUT] //only by owner =(same as number-2)
    #Create a Project by user    [POST]
    #Get all projects of user [GET]

#TODO:
    #Add members to group in the PUT part
headers = {
            "Content-Type":"application/json"
            }

def GetMembers(projectId):
    retVal = []
    for i in UserToGroup.query.filter_by(groupId=projectId,relationship="member"):
        mem = User.query.filter_by(id=i.userId).first().username
        retVal.append(mem)
    return retVal

def GetProjects(userId):
    retVal1 = []
    retVal2 = []
    for i in UserToGroup.query.filter_by(userId=userId):
        mem1 = Group.query.filter_by(id=i.groupId,groupType='researchgroup').first()
        mem2 = Group.query.filter_by(id=i.groupId,groupType='projectgroup').first()
        if mem1 is not None:
            retVal1.append(mem1.name)
        if mem2 is not None:
            retVal2.append(mem2.name)
    return retVal1, retVal2
    
#Please only call this function after validating if Group of grpId exists. Thank you -Akhil
def ChangeMembers(members,grpId):
    warning = False
    warningMsg = ""
    members = json.loads(members)
    g = Group.query.filter_by(id=grpId).first()
    g_mem = GetMembers(grpId)

    #lists tracking new members and removals
    to_add = []
    to_remove = []
    
    #check for additions and removals and append to appropriate list
    for i in range(len(members)):
        if members[i] in g_mem:
            continue
        else:
            to_add.append(members[i])
            continue

    for i in range(len(g_mem)):
        if g_mem[i] not in members:
            to_remove.append(g_mem[i])
            continue
        else:
            continue

    #Check and add Users to group
    warningAdd, warningMsgAdd = AddMembers(to_add,grpId)
    warningRemove, warningMsgRemove = RemoveMembers(to_remove, grpId)
    
    warning = warningAdd or warningRemove
    warningMsg = warningMsg + warningAdd + warningMsgRemove

    return warning, warningMsg


def AddMembers(to_add,grpId):
    warning = False
    warningMsg = ""
    g = Group.query.filter_by(id=grpId).first()
    for i in to_add:
        u = User.query.filter_by(username=i).first()
        if u is None:
            warning = True
            warningMsg = warningMsg + "User "+i+"does not exist;"
            continue
        else:
            tp = UserToGroup(userId = u.id, groupId = grpId, relationship = "member")
            try:
                db.session.add(tp)
                db.session.commit()
            except:
                warning = True
                warningMsg = warningMsg + "Unknown DB error while trying to add user: "+ i + " to group - refer AddMembers;"
            continue
        continue
    return warning, warningMsg

def RemoveMembers(to_remove,grpId):
    warning = False
    warningMsg = ""
    g = Group.query.filter_by(id=grpId).first()
    for i in to_add:
        u = User.query.filter_by(username=i).first()
        if u is None:
            warning = True
            warningMsg = warningMsg + "User "+i+"does not exist while removing member? Insane Error;"
            continue
        else:
            if(i == g.owner):
                warning = True
                warningMsg = "Owner cannot remove themselves"
                continue
            tp = UserToGroup.query.filter_by(userId = u.id, groupId = grpId, relationship = "member").first()
            try:
                db.session.delete(tp)
                db.session.commit()
            except:
                warning = True
                warningMsg = warningMsg + "Unknown DB error while trying to delete user: "+ i + "from group - refer AddMembers;"
            continue
        continue
    return warning, warningMsg




        



class ProjectBase(Resource):
    @cross_origin(origins="*")
    def get(self,project_name):
        proj = Group.query.filter_by(name=project_name).first()
        if proj is None:
            return jsonify({'description':'Project Does Not Exist','error':True}),200,headers
        members = json.dumps(GetMembers(proj.id))
        print(proj.groupType)
        if proj.groupType is 'researchgroup':
            return jsonify({'description':'Succesfully retrieved data','error':False,'projectName':proj.name,'domain':proj.domain,'owner':proj.owner,'subowner':proj.subOwner,'abstract':proj.abstract,'groupType':proj.groupType,'members':members}),200,headers
        if proj.groupType is 'projectgroup':
            flag = False
            RG = "NA"
            if(proj.researchGroup is None):
                pass
            else:
                flag = True
                RG = proj.researchGroup
            return jsonify({'description':'Succesfully retrieved data','error':False,'projectName':proj.name,'domain':proj.domain,'owner':proj.owner,'subowner':proj.subOwner,'abstract':proj.abstract,'groupType':proj.groupType,'topic':proj.topic,'underRG':flag,'researchGroup':RG,'members':members}),200,headers
        return jsonify({'description':'Succesfully retrieved data','error':False,'projectName':proj.name,'domain':proj.domain,'owner':proj.owner,'subowner':proj.subOwner,'abstract':proj.abstract,'groupType':proj.groupType,'members':members}),200,headers       
        return jsonify({'description':'Unknown Error','error':True}),200,headers

    def post(self,project_name):
        data = request.get_json(force=True)
        
        #try except blocks for the data fields have to be done !!!!!
        if current_user.is_authenticated:
            if Group.query.filter_by(name=project_name).first() is not None:
                return {'description':'Invalid project name; Project already exists','error':True},401,headers
            u1 = User.query.filter_by(username = current_user.username).first()
            usr = UserProfile.query.filter_by(id=current_user.id).first()
            #return {"test":u1.id},200,headers
            try:
                projectType = data['groupType']
            except:
                projectType = None
            if(usr.userType != 'faculty' and projectType == 'researchgroup'):
                return {'description':'Only Faculty can create Research Groups','error':True}, 401,headers
            else:
                owner = u1.username
                try:
                    domain = data['domain']
                except:
                    domain = None

                try:
                    abstract = data['abstract']
                except:
                    abstract = "[default abstract]A project by"+str(u1.username)
                warningMsg = ''
                warning = False
                
                try:
                    subowner = data['subowner']
                    u = User.query.filter_by(username=subowner).first()
                except:
                    subowner = None
                    u = None
                
                if u is None:
                    subowner = u1.username
                    warningMsg = warningMsg + 'Could not set subowner! Invalid Subowner - Set subowner as owner;'
                    warning = True
                else:
                    subowner = u.username

                if projectType == 'projectgroup':
                    try:
                        rg = data['researchGroup']
                        rgp = Group.query.filter_by(name=rg).first().id

                    except:
                        rgp = None
                        rg = None
                    
                    try:
                        topic = data['topic']
                    except:
                        topic = None
                    group = ProjectGroup(name=project_name,owner=current_user.username,domain=domain,abstract=abstract,subOwner=subowner,groupType=projectType, researchGroup= rgp,topic = topic)
                    utg = UserToGroup(userId=current_user.id,groupId=group.id)
                else:
                    group = ResearchGroup(name=project_name,owner=current_user.username,domain=domain,abstract=abstract,subOwner=subowner,groupType=projectType)
                    utg = UserToGroup(userId=current_user.id,groupId=group.id)
                    
                
                db.session.add(group)
                db.session.commit()
                return {'description':'Group created successfully','error':False,'warning':warning,'warningMsg':warningMsg}, 201,headers

                    
        return {'description':'Only Loggged In Users can creat Groups','error':True},401,headers

    def put(self,project_name):
        data = request.get_json(force=True)
        warning = False
        warningMsg = ""
        isOwner = False
        grp = Group.query.filter_by(name=project_name).first()
        if grp is None:
            return {'description':'Project Does not exist','error':True},200,headers
        if current_user.username == grp.owner:
            isOwner = True
        if current_user.username in GetMembers(grp.id):
            try:
                name = data['name']
                n = Group.query.filter_by(name = name).first()
                if n is not None:
                    name = grp.name
                    warning = True
                    warningMsg = warningMsg + "Invalid name - Group of New name already exits;"
            except:
                name = grp.name
            try:
                abstract = data['abstract']
            except:
                abstract = grp.abstract
            try:
                domain = data['domain']
            except:
                domain = grp.domain
            try:
                if(isOwner):
                    subowner = data['subowner']
                    s = User.query.filter_by(username = subowner).first()
                    if s is None:
                        subowner = grp.subOwner
                        warning = True
                        warningMsg = warningMsg + "Invalid Subowner;"
            except:
                subowner = grp.subOwner
            try:
                if(isOwner):
                    members = data['members']
                    #HERE
                    ChangeMembers(members,grpId)  
            except:
                members = grp.members
            if(grp.groupType == "researchgroup"):
                grp.name = name
                grp.abstract = abstract
                grp.domain = domain
                grp.subOwner = subowner
            if(grp.groupType == "projectgroup"):
                grp.name = name
                grp.abstract = abstract
                grp.domain = domain
                grp.subOwner = subowner
                try:
                    topic = data['topic']
                except:
                    topic = grp.topic
                try:
                    rg = data['researchGroup']
                    r = Group.query.filter_by(name = rg).first()
                    if r is None:
                        warning = True
                        warningMsg = warningMsg + "Invalid Research Group;"
                except:
                    rg = grp.researchGroup
                grp.topic = topic
                grp.researchgroup = rg

            try:
                db.session.commit()
                return {'description':'Successful update of Group','error':False,'warning':warning,'warningMsg':warningMsg},201,headers
            except:
                return {'description':'Unknown Error, failure to commit','error':True,'warning':warning,'warningMsg':warningMsg},200,headers

            


        else:
            return {'description':'Only Project members can modify Group details','error':True,'warning':warning,'warningMsg':warningMsg},401,headers

    def delete(self,project_name):
        warning = False
        warningMsg = ""
        grp = Group.query.filter_by(name=project_name).first()
        if grp is None:
            return {'description':'Project Does not exist','error':True},200,headers
        if current_user.username == grp.owner:
            try:
                session.delete(grp)
                session.commit()
                return {'description':'Successful deletion of Group','error':False,'warning':warning,'warningMsg':warningMsg},201,headers
            except:
                warning = True
                warningMsg = "Db deletin error"
                return {'description':'Unknown Error, failure to commit','error':True,'warning':warning,'warningMsg':warningMsg},200,headers

        else:
            if current_user.username in getMembers(grp.id):
                temp_list = []
                temp_list.append(current_user.username)
                warning, warningMsg = RemoveMembers(temp_list,grp.id)
                if(warning == True):
                    return {'description':'Failure to delete user from group','error':True,'warning':warning,'warningMsg':warningMsg},200,headers
                else:
                    return {'description':'Successful deletion of User from Group','error':False,'warning':warning,'warningMsg':warningMsg},201,headers
            else:
                return {'description':'Only User related to Group can Delete Group details','error':True},401,headers

             

    

class UserProjects(Resource):
    @cross_origin(origins="*")
    def get(self,user_name):
        usr = User.query.filter_by(username=user_name).first()
        if usr is None:
            return {'description':'User Does Not Exist','error':True}
        research, project = list(GetProjects(usr.id))
        numberProjects = len(project)
        numberResearch = len(research)
        return jsonify({'description':'Successful query','error':False,'projectGroups':json.dumps(project),'numberProjects':numberProjects,'researchGroups':json.dumps(research),'numberResearch':numberResearch}),200,headers

    