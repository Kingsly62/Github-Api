import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoComponent } from './logo/logo.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'logo', component: LogoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
