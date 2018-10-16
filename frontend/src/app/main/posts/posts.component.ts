import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: 'app-posts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {
  user: User = {
    userId: "001",
    picture: "assets/prof_def.jpg",
    name: "Alk",
    email: "test@test.com",
};
  
  public editContactValue: string;
  public editDobValue: string;
  public editNameValue: string;
  public editGenderValue: string;
  public editUsnValue: string;
  public editInterestsValue: string;
  public editSkillsValue: string;
  public editBioValue: string;
  constructor(
    private sidebar: NbSidebarService) { }

  posts: any;

  ngOnInit() {
    this.sidebar.expand();
  }

  public editContact():void{
    var editContactElement = <HTMLInputElement>document.getElementById('editButtonContact');
    var editDobElement = <HTMLInputElement>document.getElementById('editButtonDob');
    var editNameElement = <HTMLInputElement>document.getElementById('editButtonName');
    var editGenderElement = <HTMLInputElement>document.getElementById('editButtonGender');
    var editUsnElement = <HTMLInputElement>document.getElementById('editButtonUsn');
    this.editContactValue = editContactElement.value;
    //console.log(this.editContactValue);
    this.editDobValue =  editDobElement.value;
    this.editNameValue = editNameElement.value;
    this.editGenderValue = editGenderElement.value;
    this.editUsnValue = editUsnElement.value; 
    //var personalDetails = <HTMLInputElement>document.getElementById('personal');
    var savePadding = <HTMLInputElement>document.getElementById('saveContactPadding');
    //var editPadding = <HTMLInputElement>document.getElementById('editContactPadding');
    var editButtonPersonal = <HTMLInputElement>document.getElementById('editButtonDetails');
    var saveButtonPersonal = <HTMLInputElement>document.getElementById('saveButtonDetails');
    var cancelButtonPersonal = <HTMLInputElement>document.getElementById('cancelButtonDetails');
    //editButtonPersonal.innerHTML = "Save";
    editButtonPersonal.style.visibility = "hidden";
    editButtonPersonal.style.display = "none";
    cancelButtonPersonal.style.visibility = "visible";
    cancelButtonPersonal.style.display = "inline";
    saveButtonPersonal.style.visibility = "visible";
    saveButtonPersonal.style.display = "inline";
    savePadding.style.paddingRight="5%";
    editContactElement.removeAttribute('disabled');
    editDobElement.removeAttribute('disabled');
    editNameElement.removeAttribute('disabled');
    editGenderElement.removeAttribute('disabled');
    editUsnElement.removeAttribute('disabled');
    //console.log("edit");
    /*editButtonPersonal.onclick=function(){
        console.log("called");
        //var saveContactElement = <HTMLInputElement>document.getElementById('editButtonContact');
        //var saveDobElement = <HTMLInputElement>document.getElementById('editButtonDob');
        editContactElement.setAttribute('disabled','disabled');
        editDobElement.setAttribute('disabled','disabled');
        cancelButtonPersonal.style.visibility = "hidden";
        editButtonPersonal.innerHTML = "Edit";
    };*/
    /*cancelButtonPersonal.addEventListener('click', function(){
      editContactElement.innerHTML=editContactValue;
      editDobElement.innerHTML = editDobValue;
      cancelButtonPersonal.style.visibility = "hidden";
      editButtonPersonal.innerHTML = "Edit";
      editButtonPersonal.addEventListener('click',editContact());
    });*/
  }
  public saveContact():void{
        var saveContactElement = <HTMLInputElement>document.getElementById('editButtonContact');
        var saveDobElement = <HTMLInputElement>document.getElementById('editButtonDob');
        var saveNameElement = <HTMLInputElement>document.getElementById('editButtonName');
        var saveGenderElement = <HTMLInputElement>document.getElementById('editButtonGender');
        var saveUsnElement = <HTMLInputElement>document.getElementById('editButtonUsn');
        var editButtonPersonal = <HTMLInputElement>document.getElementById('editButtonDetails');
        var saveButtonPersonal = <HTMLInputElement>document.getElementById('saveButtonDetails');
        var cancelButtonPersonal = <HTMLInputElement>document.getElementById('cancelButtonDetails');
        var savePadding = <HTMLInputElement>document.getElementById('saveContactPadding');
        editButtonPersonal.style.visibility = "visible";
        editButtonPersonal.style.display = "inline";
        cancelButtonPersonal.style.visibility = "hidden";
        cancelButtonPersonal.style.display = "none";
        saveButtonPersonal.style.visibility = "hidden";
        saveButtonPersonal.style.display = "none";
        savePadding.style.paddingRight="0%";
        saveContactElement.setAttribute('disabled','disabled');
        saveDobElement.setAttribute('disabled','disabled');
        saveNameElement.setAttribute('disabled','disabled');
        saveGenderElement.setAttribute('disabled','disabled');
        saveUsnElement.setAttribute('disabled','disabled');
  }
  public cancelContact():void{
        var cancelContactElement = <HTMLInputElement>document.getElementById('editButtonContact');
        var cancelDobElement = <HTMLInputElement>document.getElementById('editButtonDob');
        var cancelNameElement = <HTMLInputElement>document.getElementById('editButtonName');
        var cancelGenderElement = <HTMLInputElement>document.getElementById('editButtonGender');
        var cancelUsnElement = <HTMLInputElement>document.getElementById('editButtonUsn');
        var editButtonPersonal = <HTMLInputElement>document.getElementById('editButtonDetails');
        var saveButtonPersonal = <HTMLInputElement>document.getElementById('saveButtonDetails');
        var cancelButtonPersonal = <HTMLInputElement>document.getElementById('cancelButtonDetails');
        var savePadding = <HTMLInputElement>document.getElementById('saveContactPadding');
        editButtonPersonal.style.visibility = "visible";
        editButtonPersonal.style.display = "inline";
        cancelButtonPersonal.style.visibility = "hidden";
        cancelButtonPersonal.style.display = "none";
        saveButtonPersonal.style.visibility = "hidden";
        saveButtonPersonal.style.display = "none";
        cancelContactElement.value = this.editContactValue;
        //console.log(this.editContactValue);
        cancelDobElement.value = this.editDobValue;
        cancelNameElement.value = this.editNameValue;
        cancelGenderElement.value = this.editGenderValue;
        cancelUsnElement.value = this.editUsnValue;
        savePadding.style.paddingRight="0%";
        cancelContactElement.setAttribute('disabled','disabled');
        cancelDobElement.setAttribute('disabled','disabled');
        cancelNameElement.setAttribute('disabled','disabled');
        cancelGenderElement.setAttribute('disabled','disabled');
        cancelUsnElement.setAttribute('disabled','disabled');
  }
  public editInterests():void{
    //var fieldElement2 = <HTMLInputElement>document.getElementById('editButtonInterests');
    //fieldElement2.removeAttribute('disabled');
    var editInterestsElement = <HTMLInputElement>document.getElementById('ButtonInterests');
    var editSkillsElement = <HTMLInputElement>document.getElementById('ButtonSkills');
    this.editInterestsValue = editInterestsElement.value;
    this.editSkillsValue =  editSkillsElement.value;
    var savePadding = <HTMLInputElement>document.getElementById('saveInterestsPadding');
    var editButtonInterests = <HTMLInputElement>document.getElementById('editButtonSkills');
    var saveButtonInterests = <HTMLInputElement>document.getElementById('saveButtonSkills');
    var cancelButtonInterests = <HTMLInputElement>document.getElementById('cancelButtonSkills');
    editButtonInterests.style.visibility = "hidden";
    editButtonInterests.style.display = "none";
    cancelButtonInterests.style.visibility = "visible";
    cancelButtonInterests.style.display = "inline";
    saveButtonInterests.style.visibility = "visible";
    saveButtonInterests.style.display = "inline";
    savePadding.style.paddingRight="5%";
    editInterestsElement.removeAttribute('disabled');
    editSkillsElement.removeAttribute('disabled');
  }
  public saveInterests():void{
    //var fieldElement3 = <HTMLInputElement>document.getElementById('editButtonInterests');
    //fieldElement3.setAttribute('disabled','disabled');
        var saveInterestsElement = <HTMLInputElement>document.getElementById('ButtonInterests');
        var saveSkillsElement = <HTMLInputElement>document.getElementById('ButtonSkills');
        var editButtonInterests = <HTMLInputElement>document.getElementById('editButtonSkills');
        var saveButtonInterests = <HTMLInputElement>document.getElementById('saveButtonSkills');
        var cancelButtonInterests = <HTMLInputElement>document.getElementById('cancelButtonSkills');
        var savePadding = <HTMLInputElement>document.getElementById('saveInterestsPadding');
        editButtonInterests.style.visibility = "visible";
        editButtonInterests.style.display = "inline";
        cancelButtonInterests.style.visibility = "hidden";
        cancelButtonInterests.style.display = "none";
        saveButtonInterests.style.visibility = "hidden";
        saveButtonInterests.style.display = "none";
        savePadding.style.paddingRight="0%";
        saveInterestsElement.setAttribute('disabled','disabled');
        saveSkillsElement.setAttribute('disabled','disabled');
  }
  public cancelInterests():void{
        var cancelInterestsElement = <HTMLInputElement>document.getElementById('ButtonInterests');
        var cancelSkillsElement = <HTMLInputElement>document.getElementById('ButtonSkills');
        var editButtonInterests = <HTMLInputElement>document.getElementById('editButtonSkills');
        var saveButtonInterests = <HTMLInputElement>document.getElementById('saveButtonSkills');
        var cancelButtonInterests = <HTMLInputElement>document.getElementById('cancelButtonSkills');
        var savePadding = <HTMLInputElement>document.getElementById('saveInterestsPadding');
        editButtonInterests.style.visibility = "visible";
        editButtonInterests.style.display = "inline";
        cancelButtonInterests.style.visibility = "hidden";
        cancelButtonInterests.style.display = "none";
        saveButtonInterests.style.visibility = "hidden";
        saveButtonInterests.style.display = "none";
        cancelInterestsElement.value = this.editInterestsValue;
        //console.log(this.editContactValue);
        cancelSkillsElement.value = this.editSkillsValue;
        savePadding.style.paddingRight="0%";
        cancelInterestsElement.setAttribute('disabled','disabled');
        cancelSkillsElement.setAttribute('disabled','disabled');
  }
  public editBio():void{
    //var fieldElement4 = <HTMLInputElement>document.getElementById('editButtonBio');
    //fieldElement4.removeAttribute('disabled');
    var editBioElement = <HTMLInputElement>document.getElementById('editButtonBio');
    this.editBioValue = editBioElement.value;
    var savePadding = <HTMLInputElement>document.getElementById('saveBioPadding');
    var editButtonBio = <HTMLInputElement>document.getElementById('editButtonData');
    var saveButtonBio = <HTMLInputElement>document.getElementById('saveButtonData');
    var cancelButtonBio = <HTMLInputElement>document.getElementById('cancelButtonData');
    editButtonBio.style.visibility = "hidden";
    editButtonBio.style.display = "none";
    cancelButtonBio.style.visibility = "visible";
    cancelButtonBio.style.display = "inline";
    saveButtonBio.style.visibility = "visible";
    saveButtonBio.style.display = "inline";
    savePadding.style.paddingRight="5%";
    editBioElement.removeAttribute('disabled');
  }
  public saveBio():void{
        var saveBioElement = <HTMLInputElement>document.getElementById('editButtonBio');
        var editButtonBio = <HTMLInputElement>document.getElementById('editButtonData');
        var saveButtonBio = <HTMLInputElement>document.getElementById('saveButtonData');
        var cancelButtonBio = <HTMLInputElement>document.getElementById('cancelButtonData');
        var savePadding = <HTMLInputElement>document.getElementById('saveBioPadding');
        editButtonBio.style.visibility = "visible";
        editButtonBio.style.display = "inline";
        cancelButtonBio.style.visibility = "hidden";
        cancelButtonBio.style.display = "none";
        saveButtonBio.style.visibility = "hidden";
        saveButtonBio.style.display = "none";
        savePadding.style.paddingRight="0%";
        saveBioElement.setAttribute('disabled','disabled');
    //var fieldElement5 = <HTMLInputElement>document.getElementById('editButtonBio');
    //fieldElement5.setAttribute('disabled','disabled');
  }
  public cancelBio():void{
        var cancelBioElement = <HTMLInputElement>document.getElementById('editButtonBio');
        var editButtonBio = <HTMLInputElement>document.getElementById('editButtonData');
        var saveButtonBio = <HTMLInputElement>document.getElementById('saveButtonData');
        var cancelButtonBio = <HTMLInputElement>document.getElementById('cancelButtonData');
        var savePadding = <HTMLInputElement>document.getElementById('saveBioPadding');
        editButtonBio.style.visibility = "visible";
        editButtonBio.style.display = "inline";
        cancelButtonBio.style.visibility = "hidden";
        cancelButtonBio.style.display = "none";
        saveButtonBio.style.visibility = "hidden";
        saveButtonBio.style.display = "none";
        cancelBioElement.value = this.editBioValue;
        //console.log(this.editContactValue);
        savePadding.style.paddingRight="0%";
        cancelBioElement.setAttribute('disabled','disabled');
  }
}
