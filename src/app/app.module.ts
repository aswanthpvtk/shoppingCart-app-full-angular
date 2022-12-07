import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdNavbarComponent } from './ad-navbar/ad-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProAddComponent } from './pro-add/pro-add.component';
import { AddViewComponent } from './add-view/add-view.component';
import { AddSearchComponent } from './add-search/add-search.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"aad",
    component:ProAddComponent
  },
  {
    path:"av",
    component:AddViewComponent
  },
  {
    path:"as",
    component:AddSearchComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdNavbarComponent,
    ProAddComponent,
    AddViewComponent,
    AddSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
