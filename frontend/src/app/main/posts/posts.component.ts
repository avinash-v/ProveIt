import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {
  user = {
    picture: "assets/prof_def.jpg",
    name: "Alk",
    email: "test@test.com",
};
  constructor() { }

  ngOnInit() {
  }
  public editContact():void{
    var fieldElement = <HTMLInputElement>document.getElementById('editButtonContact');
    fieldElement.removeAttribute('disabled');
  }
  public saveContact():void{
    var fieldElement1 = <HTMLInputElement>document.getElementById('editButtonContact');
    fieldElement1.setAttribute('disabled','disabled');
  }
  public editInterests():void{
    var fieldElement2 = <HTMLInputElement>document.getElementById('editButtonInterests');
    fieldElement2.removeAttribute('disabled');
  }
  public saveInterests():void{
    var fieldElement3 = <HTMLInputElement>document.getElementById('editButtonInterests');
    fieldElement3.setAttribute('disabled','disabled');
  }
  public editBio():void{
    var fieldElement4 = <HTMLInputElement>document.getElementById('editButtonBio');
    fieldElement4.removeAttribute('disabled');
  }
  public saveBio():void{
    var fieldElement5 = <HTMLInputElement>document.getElementById('editButtonBio');
    fieldElement5.setAttribute('disabled','disabled');
  }

}
