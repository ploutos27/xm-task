import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent, RegistrationComponent, WelcomeComponent } from './routes';
import { RegistrationButtonComponent, BreadcrumbsComponent, 
  RegistrationFormComponent, RegistrationErrorsComponent,
  LoginButtonComponent, RegistrationLoginComponent } from './components/index';

// Helpers
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './helpers';
import { NotFoundComponent } from './routes/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    WelcomeComponent,
    DashboardComponent,
    RegistrationButtonComponent,
    BreadcrumbsComponent,
    RegistrationFormComponent,
    RegistrationErrorsComponent,
    RegistrationLoginComponent,
    LoginButtonComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
