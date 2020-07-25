import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { DashboardComponent, RegistrationComponent, WelcomeComponent } from './routes';
import { RegistrationButtonComponent, BreadcrumbsComponent, RegistrationFormComponent} from './components/index';
import { RegistrationErrorsComponent } from './components/registration-errors/registration-errors.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    WelcomeComponent,
    DashboardComponent,
    RegistrationButtonComponent,
    BreadcrumbsComponent,
    RegistrationFormComponent,
    RegistrationErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
