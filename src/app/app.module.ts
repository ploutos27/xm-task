import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent, RegistrationComponent, WelcomeComponent } from './routes';
import { RegistrationButtonComponent, BreadcrumbsComponent, RegistrationFormComponent, RegistrationErrorsComponent} from './components/index';



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
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
