import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipe } from "./pipes/safehtml.pipe";

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

import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth.guard';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { HomeEditComponent } from './components/home-edit/home-edit.component';
import { SocialEditComponent } from './components/social-edit/social-edit.component';

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
    ContactFormComponent,
    CreateComponent,
    EditComponent,
    SafeHtmlPipe,
    RegisterComponent,
    AboutEditComponent,
    HomeEditComponent,
    SocialEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule,
    FormsModule
  ],
  providers: [ProjectService, UserService, AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
