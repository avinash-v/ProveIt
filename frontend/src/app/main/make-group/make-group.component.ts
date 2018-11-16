import { ChangeDetectionStrategy, ViewEncapsulation, Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from "../user.service";
import { User } from "../user"

@Component({
  selector: 'app-make-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './make-group.component.html',
  styleUrls: ['./make-group.component.css']
})
export class MakeGroupComponent implements OnInit {
public grpValue;
public topicValue;
public domainValue;
public abstractValue;
public membersValue;
  
  users: { name: string, title: string }[] = [
    { name: 'Anurag K', title: 'Student' },
    { name: 'Mayank', title: 'Group Leader' },
    { name: 'Akhil', title: 'Student' },
    { name: 'Arun', title: 'Professor' },
  ];


  constructor(
    private sidebar: NbSidebarService) { }
  ngOnInit() {
      this.sidebar.expand();  }


  public save():void{

  
  }

  public cancel():void{
this.grpValue=""
this.topicValue=""
this.domainValue=[]
this.abstractValue=""
this.membersValue=[]
  }
}