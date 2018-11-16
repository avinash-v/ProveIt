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
  afuConfig = {
    multiple : false,
    formatsAllowed : ".jpeg,.pdf,.png",
    uploadAPI:{
      url : "http://127.0.0.1:5555/upload",
      headers:{
      "Content-Type" : "application/json",
      },
  },
       theme : "dragNDrop"

  };
  postLoadincomplete: boolean;
  posts: Object;
  public inputPost : string;

  
  constructor(private getpost: GetPostService, private ref: ChangeDetectorRef,
  private sidebar: NbSidebarService, private route: ActivatedRoute) {}
  getPostsForUser(): void {
    console.log("--------------")
    this.postLoadincomplete = true;
    this.getpost.getPosts()
    .subscribe(
      data => { this.posts = data;
      console.log(data);
      },
      err => { 
        this.postLoadincomplete = false;
        console.error(err); },
      () => { 
        this.postLoadincomplete = false;
        this.ref.markForCheck(); }
    );
  }

  makePost(): void{
    console.log("--------------")
      this.postLoadincomplete = true;
    console.log(this.inputPost)


    this.getpost.makePosts(this.inputPost)

    .subscribe(
      data => { 
        this.posts = data;
      console.log(data);
      },
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
    this.getPostsForUser();
    //console.log(this.posts);
  }
}
