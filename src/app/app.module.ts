import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileService } from './profile-service/profile.service';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LogoComponent,
    FooterComponent,
    ContactComponent,
    GithubSearchComponent,
    NotFoundComponent,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
