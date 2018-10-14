import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'post',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post.component.html',
})
export class PostComponent {
  postInfo = {
    group: "Gr",
    groupPic: "#",
    author: "Usr",
    heading: "head",
    body: "body"
  };
  constructor() { }

  ngOnInit() {
  }
}
