import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetPostService } from '../get-post.service';
import { Posts } from '../posts';
import { NbSidebarService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

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
  postLoadincomplete: boolean;
  posts: Object;
  constructor(private getpost: GetPostService, private ref: ChangeDetectorRef,
  private sidebar: NbSidebarService, private route: ActivatedRoute) {}
  getPostsForUser(id): void {
    this.postLoadincomplete = true;
    this.getpost.getPosts(id)
    .subscribe(
      data => { this.posts = data; },
      err => { 
        this.postLoadincomplete = false;
        console.error(err); },
      () => { 
        this.postLoadincomplete = false;
        this.ref.markForCheck(); }
    );
  }

  ngOnInit() {
    this.sidebar.expand();
    //this.getPostsForUser();
    console.log("started");
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPostsForUser(id);
    //console.log(this.posts);
  }
}
