import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    HeroComponent,
    LoginComponent,
    DashboardComponent,
    ProjectComponent,
    ThumbnailsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
