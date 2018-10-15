import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path : '' , component : MainComponent,
    children : [
      {
        path : 'posts',
        component : PostComponent
      },
      {
        path : 'profile',
        component : PostsComponent
      },
      {
        path : '',
<<<<<<< HEAD
        component: HomeComponent
      },
      {
        path : 'aboutus',
        component: AboutusComponent
=======
        component: PostsComponent
<<<<<<< HEAD
      },
      {
        path : 'home',
        component: HomeComponent
=======
>>>>>>> 7dc3149a4fb2f0d1e631a975c04ea428c662ddc5
>>>>>>> fb922ccffb5b125eb6081d8ba7ee55e7b01d5b7c
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NbLayoutModule, NbSidebarModule
  ],
  providers : [ NbSidebarService ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
