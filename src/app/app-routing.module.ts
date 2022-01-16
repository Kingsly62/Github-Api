import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoComponent } from './logo/logo.component';
import { ContactComponent } from './contact/contact.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'logo', component: LogoComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'github-search', component: GithubSearchComponent
  },
  {
    path: 'member', component:MemberComponent
  },
  {
    path: '**', component:NotFoundComponent
  },
  {
     path: '', redirectTo:"/home", pathMatch:"full"},

  
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
