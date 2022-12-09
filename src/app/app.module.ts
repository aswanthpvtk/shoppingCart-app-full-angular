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
import { UserLogComponent } from './user-log/user-log.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserViewComponent } from './user-view/user-view.component';
import {HttpClientModule} from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UsersearchComponent } from './usersearch/usersearch.component';



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
  },
  {
    path:"ul",
    component:UserLogComponent
  },
  {
    path:"ur",
    component:UserRegComponent
  },
  {
    path:"uv",
    component:UserViewComponent
  },
  {
    path:"us",
    component:UsersearchComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdNavbarComponent,
    ProAddComponent,
    AddViewComponent,
    AddSearchComponent,
    UserLogComponent,
    UserRegComponent,
    UserViewComponent,
    MainNavComponent,
    UserNavComponent,
    UsersearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
