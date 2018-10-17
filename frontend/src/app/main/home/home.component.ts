import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public buttonColor: string = 'white';
  constructor(private sidebar: NbSidebarService) { }

  ngOnInit(){
    this.sidebar.collapse();
  }
  public toggleNamedColor(): void {
        this.buttonColor = '#87CEFA';
  }

}
