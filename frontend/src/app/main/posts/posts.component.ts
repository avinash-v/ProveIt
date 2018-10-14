import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  styles: [`
    :host nb-tab {
      padding: 1.25rem;
    }
  `
  ],

})
export class PostsComponent implements OnInit {
  user = {
    name: "Alk",
    email: "test@test.com",
};
  constructor() { }

  ngOnInit() {
  }

}
