import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpLinkService } from '../../http-link.service';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from "../user.service";
import { User } from "../user";
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { GetImageService } from '../get-image.service';

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
  imageProfile: any;
  isImageLoading: boolean;

  public editInterestsValue;
  public editContactValue: string;
  public editDobValue: string;
  public editFNameValue: string;
  public editLNameValue: string;
  public editUserTypeValue;
  public editUsnValue: number;
  public editBioValue: string;
  public editSkillsValue: string;
  public editUNameValue: string;
    public editUNameValue1: string;
  public flag: number=1;
  public tempBio;
  public tempUName;
  public tempFName;
  public tempLName;
  public tempContact;
  public tempDob;
  public tempUsn;
  public tempInterests;
  public tempSkills;
  public tempUserType;

  constructor(
    private sidebar: NbSidebarService,
    public rest:HttpLinkService,
    private imageloader: GetImageService,
    private ref: ChangeDetectorRef) { }

  posts: any;

  ngOnInit() {
  	this.getProfile();
    this.sidebar.expand();
    this.getImageFromService();
  }

  public postProfile(): void {
    var profileData = {"username":this.editUNameValue,"collegeId":this.editUsnValue, "firstName":this.editFNameValue, "lastName":this.editLNameValue, "contact":this.editContactValue, "userId":localStorage.getItem("userId"),"userType":"student" ,"bio":"studd","interests" : "Definitely not SE","skills":"not good at anything"}

    this.rest.postData("http://127.0.0.1:5555/profile",profileData).subscribe((data : {}) => {
      console.log(data);


    });
  }
  data: any;
  
  public getProfile():void{
  var userId = localStorage.getItem("userId");
  this.rest.getData("http://127.0.0.1:5555/profile/" + userId)
  .subscribe(
    dataIn => { this.data = dataIn; 
    },
    err => { 
      console.error(err); 
    },
    () => { 
      if(this.data.hasOwnProperty("username"))
  		{
  		  console.log("hey");
  		  console.log(this.data.username);
      	this.editUNameValue = this.data.username;
      	  		console.log(this.editUNameValue);
      	this.editFNameValue = this.data.firstName;
      	this.editLNameValue = this.data.lastName;
      	this.editContactValue = this.data.contact;
      	this.editUserTypeValue= this.data.userType;
      	this.editSkillsValue = this.data.skills;
      	this.editBioValue = this.data.bio;
      }
      this.ref.markForCheck(); 
    }
  );
}



  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageProfile = reader.result;
       console.log("read done");
       this.ref.markForCheck();
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
 getImageFromService() {
  this.isImageLoading = true;
  this.imageloader.getImage("https://i.imgur.com/fHyEMsl.jpg").subscribe(data => {
    this.createImageFromBlob(data);
    this.isImageLoading = false;
  }, error => {
    this.isImageLoading = false;
    console.log(error);
  });
}
  public editBio():void{
    //this.editBioElement = <HTMLInputElement>document.getElementById('editButtonBio');
    this.tempBio = this.editBioValue;
    this.tempUName = this.editUNameValue;
    this.tempFName = this.editFNameValue;
    this.tempLName = this.editLNameValue;
    this.tempContact = this.editContactValue;
    this.tempDob = this.editDobValue;
    this.tempUsn = this.editUsnValue;
    this.tempSkills = this.editSkillsValue;
    this.tempInterests = this.editInterestsValue;
    this.tempUserType= this.editUserTypeValue;
    //var savePadding = <HTMLInputElement>document.getElementById('saveBioPadding');
    console.log(this.editUserTypeValue);
    //savePadding.style.paddingRight="5%";
    this.flag = 0;
  }
  public saveBio():void{

        //var savePadding = <HTMLInputElement>document.getElementById('saveBioPadding');
        //savePadding.style.paddingRight="0%";
    	this.flag = 1;
    	this.postProfile();

  }
  public cancelBio():void{
        //var savePadding = <HTMLInputElement>document.getElementById('saveBioPadding');
        //savePadding.style.paddingRight="0%";
        this.editBioValue = this.tempBio;
        this.editUNameValue = this.tempUName;
        this.editFNameValue = this.tempFName;
        this.editLNameValue = this.tempLName;
        this.editContactValue = this.tempContact;
        this.editDobValue = this.tempDob;
        this.editUsnValue = this.tempUsn;
        this.editSkillsValue = this.tempSkills;
        this.editInterestsValue = this.tempInterests;
        this.editUserTypeValue= this.tempUserType;
        this.flag = 1;
  }
}
