import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'post',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  postInfo = {
    group: "Gr",
    groupPic: "assets/prof_def.jpg",
    author: "Usr",
    heading: "head",
    body: "body"
  };
  constructor() { }

  ngOnInit() {
  }
}
