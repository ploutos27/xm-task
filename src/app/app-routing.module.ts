import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, RegistrationComponent, WelcomeComponent, NotFoundComponent } from './routes';
import { AuthGuard } from './helpers';

const routes: Routes = [
  { path: '',component: DashboardComponent },
  { path: 'registration',component: RegistrationComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
