import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';

import { NbPasswordAuthStrategy, NbAuthModule, NbAuthSimpleToken } from '@nebular/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Browser } from 'protractor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NbThemeModule.forRoot(  { name : 'default' }  ),
    BrowserModule,
    BrowserAnimationsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: "http://127.0.0.1:5555",
          login:{
            endpoint: "/login",
            method: "post",
          },
          register:{
            endpoint: "/signup",
            method: "post",
          },
          logout:{
            endpoint: "/logout",
            method: "post",
          }
        }),
      ],
      forms: {},
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
