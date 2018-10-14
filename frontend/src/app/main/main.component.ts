import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items = [{title : 'Profile' }, {title : 'Logout'}];
  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService) { }

  toggleSidebar() {
    this.sidebarService.toggle(false);
    return false;
  }
  ngOnInit() {
  }

}
