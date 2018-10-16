import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items = [{ title: 'Profile' link: ['/profile']}, {title : 'Logout' link: ['']}];
  item_menu = [
    {
      title: 'Groups',
      expanded: false,
      icon: 'ion ion-android-radio-button-off',
      children: [
        {
          title: 'SE Research Group',
          link: ['/posts'], // goes into angular `routerLink`
        }
      ],
    },
    {
      title: 'Projects',
      expanded: false,
      icon: 'ion ion-android-radio-button-off',
      children: [
        {
          title: 'SE Project Group',
          link : ['/posts'],
        }
      ]
    },
    {
      title: 'Reimbursements',
      link: [],
    },
  ];
  constructor(private menuService: NbMenuService) { }
  ngOnInit() {
  }

}
