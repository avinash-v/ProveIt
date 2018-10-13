import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [ NbSidebarService ],
  declarations: [MainLayoutComponent]
})
export class MainModule { }
