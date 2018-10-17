import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private sidebar: NbSidebarService) { }

  ngOnInit() {
    this.sidebar.collapse();
  }

}
