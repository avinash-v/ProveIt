import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetPostService } from '../get-post.service';
import { Posts } from '../posts';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postInfo = {
    group: "Gr",
    groupPic: "assets/prof_def.jpg",
    author: "Usr",
    heading: "head",
    body: "body"
  };
  posts: Object;
  constructor(private getpost: GetPostService, private ref: ChangeDetectorRef) {}
  getPostsForUser(): void {
    this.getpost.getPosts()
    .subscribe(
      data => { this.posts = data; },
      err => { console.error(err); },
      () => { this.ref.markForCheck(); }
    );
  }

  ngOnInit() {
    this.getPostsForUser();
    console.log("started");
    //console.log(this.posts);
  }
}
