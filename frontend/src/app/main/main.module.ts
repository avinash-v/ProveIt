import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main-routing.module';

// tslint:disable-next-line:max-line-length

import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbActionsModule, NbUserModule, NbCardModule, NbContextMenuModule, NbMenuService, NbMenuModule, NbTabsetModule, NbRouteTabsetModule, NbButtonModule, NbInputModule, NbAccordionModule, NbListModule, NbSpinnerModule, NbSelectModule} from '@nebular/theme';

import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetPostService } from './get-post.service';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { MakeProjectComponent } from './make-project/make-project.component';
import { MakeGroupComponent } from './make-group/make-group.component';
import { GroupsComponent } from './groups/groups.component';
<<<<<<< HEAD
import { RecommendationComponent } from './recommendation/recommendation.component';
=======
import { GetImageService } from './get-image.service';
import {FormsModule} from '@angular/forms';

>>>>>>> 7015f6301b4ecebbdea4a7966b2bee41750aa6b0

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
    NbSelectModule,
    HttpClientModule,
    AngularFileUploaderModule,
    NbSpinnerModule,
    NbListModule,
    FormsModule
  ],
<<<<<<< HEAD
  providers: [ NbSidebarService, NbMenuService, GetPostService ],
  declarations: [ MainComponent , PostsComponent, PostComponent, HomeComponent, AboutusComponent, MakeProjectComponent, MakeGroupComponent, GroupsComponent, RecommendationComponent]
=======
  providers: [ NbSidebarService, NbMenuService, GetPostService , GetImageService],
  declarations: [ MainComponent , PostsComponent, PostComponent, HomeComponent, AboutusComponent, MakeProjectComponent, MakeGroupComponent, GroupsComponent]
>>>>>>> 7015f6301b4ecebbdea4a7966b2bee41750aa6b0
})
export class MainModule { }
