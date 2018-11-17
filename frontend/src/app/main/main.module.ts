import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main-routing.module';

// tslint:disable-next-line:max-line-length

import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbActionsModule, NbUserModule, NbCardModule, NbContextMenuModule, NbMenuService, NbMenuModule, NbTabsetModule, NbRouteTabsetModule, NbButtonModule, NbInputModule, NbAccordionModule, NbListModule, NbSpinnerModule, NbSelectModule, NbToastrModule} from '@nebular/theme';

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
import { ReimbursementsComponent } from './reimbursements/reimbursements.component';
=======

import { RecommendationComponent } from './recommendation/recommendation.component';

>>>>>>> 7ba92c319c30fd574750aaebe9a9b295a8c84cce
import { GetImageService } from './get-image.service';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
=======

>>>>>>> 7ba92c319c30fd574750aaebe9a9b295a8c84cce

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
    FormsModule,
    NbToastrModule.forRoot()
  ],
  providers: [ NbSidebarService, NbMenuService, GetPostService , GetImageService],
<<<<<<< HEAD
  declarations: [ MainComponent , PostsComponent, PostComponent, HomeComponent, AboutusComponent, MakeProjectComponent, ReimbursementsComponent, RecommendationComponent,MakeGroupComponent, GroupsComponent]
=======
  declarations: [ MainComponent , PostsComponent, PostComponent, HomeComponent, AboutusComponent, MakeProjectComponent, MakeGroupComponent, GroupsComponent , RecommendationComponent]

>>>>>>> 7ba92c319c30fd574750aaebe9a9b295a8c84cce
})
export class MainModule { }
