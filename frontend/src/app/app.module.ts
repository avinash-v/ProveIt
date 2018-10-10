import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { NbAuthModule,NbPasswordAuthStrategy, NbAuthStrategy } from '@nebular/auth';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'light' }),
    NbAuthModule.forRoot({
      strategies : [NbPasswordAuthStrategy.setup({
      name: 'email',
    }),
    ],
    forms: {},
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
