import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { DashboardComponent, RegistrationComponent, WelcomeComponent } from './routes';

import { RegistrationButtonComponent } from './components/registration-button/registration-button.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    WelcomeComponent,
    DashboardComponent,
    RegistrationButtonComponent,
    BreadcrumbsComponent,
    RegistrationFormComponent
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
