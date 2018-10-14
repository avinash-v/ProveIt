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

}
