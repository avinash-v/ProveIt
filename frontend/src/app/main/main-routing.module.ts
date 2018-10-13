import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path : '' , component : MainComponent,
    children : [
      {
        path : 'posts',
        component : PostsComponent
      },
      {
        path : '',
        component: PostsComponent
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
