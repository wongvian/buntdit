import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import * as _ from 'underscore';
import { PagerService } from './PagerService';

import { PunditserviceService } from './share/punditservice.service';
import { RedirectComponent } from './redirect/redirect.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },

/*      { path: 'index.html/view/:id', component: ViewComponent },
      { path: 'index.html%23/view/:id', component: ViewComponent },
      { path: 'index.html#/view/:id', component: ViewComponent },
      { path: '#/view/:id', component: ViewComponent },
*/
      { path: 'view/:id', component: ViewComponent },
      
      { path: '**', redirectTo: '/',
      pathMatch: 'full' }
    ])
  ],
  providers: [PagerService, PunditserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
