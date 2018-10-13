import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [ NbSidebarService ],
  declarations: [ MainComponent , PostsComponent]
})
export class MainModule { }
