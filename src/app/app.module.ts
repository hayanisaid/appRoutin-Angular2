import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {appListComponent}  from './app-routing.module';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    appListComponent,
    DepartmentDetailsComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
      
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
