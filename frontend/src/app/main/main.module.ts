import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main-routing.module';

// tslint:disable-next-line:max-line-length
import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbActionsModule, NbUserModule, NbCardModule, NbContextMenuModule, NbMenuService, NbMenuModule } from '@nebular/theme';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbUserModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule
  ],
  providers: [ NbSidebarService, NbMenuService ],
  declarations: [ MainComponent , PostsComponent]
})
export class MainModule { }
