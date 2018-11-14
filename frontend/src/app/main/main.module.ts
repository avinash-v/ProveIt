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
<<<<<<< HEAD
import { MakeProjectComponent } from './make-project/make-project.component';
import { MakeGroupComponent } from './make-group/make-group.component';
=======
import { GroupsComponent } from './groups/groups.component';
>>>>>>> 48c2b88c9bd362e7867872fcb99efcbb040f2d2a

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
  ],
  providers: [ NbSidebarService, NbMenuService, GetPostService ],
<<<<<<< HEAD
  declarations: [ MainComponent , PostsComponent, PostComponent, HomeComponent, AboutusComponent, MakeProjectComponent, MakeGroupComponent]
=======
  declarations: [ MainComponent , PostsComponent, PostComponent, HomeComponent, AboutusComponent, GroupsComponent]
>>>>>>> 48c2b88c9bd362e7867872fcb99efcbb040f2d2a
})
export class MainModule { }
