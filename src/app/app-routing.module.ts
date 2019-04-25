import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/project/project.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'portfolio/:id', component: ProjectComponent },
	{ path: 'project/edit/:id', component: EditComponent },
	{ path: 'create', component: CreateComponent }
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
ProjectComponent,
EditComponent
];
