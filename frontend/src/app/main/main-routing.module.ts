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
        component: HomeComponent
      },
      {
        path : 'aboutus',
        component: AboutusComponent
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
