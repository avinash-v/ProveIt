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
  constructor(
    private sidebar: NbSidebarService) { }

  groups: any;

  ngOnInit() {
    this.sidebar.expand();
  }

}
