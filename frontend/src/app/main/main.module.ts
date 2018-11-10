import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main-routing.module';

// tslint:disable-next-line:max-line-length
<<<<<<< HEAD
<<<<<<< HEAD
import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbActionsModule, NbUserModule, NbCardModule, NbContextMenuModule, NbMenuService, NbMenuModule, NbTabsetModule, NbRouteTabsetModule, NbButtonModule, NbInputModule, NbAccordionModule, NbListModule,NbSelectModule} from '@nebular/theme';
=======
import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbActionsModule, NbUserModule, NbCardModule, NbContextMenuModule, NbMenuService, NbMenuModule, NbTabsetModule, NbRouteTabsetModule, NbButtonModule, NbInputModule, NbAccordionModule, NbListModule, NbSpinnerModule} from '@nebular/theme';
>>>>>>> 34798dd61fb23c26ea631c9e645faccc943b48cc
=======
import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbActionsModule, NbUserModule, NbCardModule, NbContextMenuModule, NbMenuService, NbMenuModule, NbTabsetModule, NbRouteTabsetModule, NbButtonModule, NbInputModule, NbAccordionModule, NbListModule, NbSpinnerModule} from '@nebular/theme';
>>>>>>> 34798dd61fb23c26ea631c9e645faccc943b48cc

import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetPostService } from './get-post.service';
import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbUserModule,
    NbCardModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbButtonModule,
    NbInputModule,
<<<<<<< HEAD
<<<<<<< HEAD
    NbSelectModule,
    HttpClientModule
=======
    HttpClientModule,
    AngularFileUploaderModule,
    NbSpinnerModule
>>>>>>> 34798dd61fb23c26ea631c9e645faccc943b48cc
=======
    HttpClientModule,
    AngularFileUploaderModule,
    NbSpinnerModule
>>>>>>> 34798dd61fb23c26ea631c9e645faccc943b48cc
  ],
  providers: [ NbSidebarService, NbMenuService, GetPostService ],
  declarations: [ MainComponent , PostsComponent, PostComponent, HomeComponent, AboutusComponent]
})
export class MainModule { }
