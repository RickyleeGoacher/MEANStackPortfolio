import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from  './auth.guard';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/project/project.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { SocialEditComponent } from './components/social-edit/social-edit.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'portfolio/:url', component: ProjectComponent },
	{ path: 'project/edit/:id', component: EditComponent, canActivate: [AuthGuard] },
	{ path: 'social/edit/:id', component: SocialEditComponent, canActivate: [AuthGuard] },
	{ path: 'create', component: CreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
PortfolioComponent, 
AboutComponent, 
HomeComponent,
ContactComponent,
DashboardComponent,
LoginComponent,
RegisterComponent,
ProjectComponent,
SocialEditComponent,
EditComponent,
CreateComponent
];
