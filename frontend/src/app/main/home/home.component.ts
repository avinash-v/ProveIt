import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public buttonColor: string = 'white';
  constructor() { }

  ngOnInit(){

  }
  public toggleNamedColor(): void {
        this.buttonColor = '#87CEFA';
    }

}
