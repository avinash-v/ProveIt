import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from "../user.service";
import { User } from "../user"

@Component({
  selector: 'app-groups',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css' ], 
})
export class GroupsComponent implements OnInit {
user: User = {
    userId: "001",
    picture: "assets/prof_def.jpg",
    name: "CCBD",
    email: "test@test.com",
};
users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
  ];

  public editBioValue: string;
  
  constructor(
    private sidebar: NbSidebarService) { }

  groups: any;

  ngOnInit() {
    this.sidebar.expand();
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
