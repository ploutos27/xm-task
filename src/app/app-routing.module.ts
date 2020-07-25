import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, RegistrationComponent, WelcomeComponent } from './routes';

const routes: Routes = [
  { path: '',component: DashboardComponent },
  { path: 'registration',component: RegistrationComponent },
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
