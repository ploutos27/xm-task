import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-registration-login',
  templateUrl: './registration-login.component.html',
  styleUrls: ['./registration-login.component.scss']
})

export class RegistrationLoginComponent implements OnInit {
  login: FormGroup;
  clickEventsubscription: Subscription;

  emailText: string = 'Email';
  passwordText: string = 'Password';
  loading: boolean = false;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private router: Router,
    private httpServices: HttpService) { 
      this.clickEventsubscription = this.sharedService.getClickEventLogin().subscribe(() => this.onSubmit());
    }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.login.statusChanges.subscribe(res=> {
      this.sharedService.sendClickEventChangeLoginFormStatus(res);
    });
  }

  get f() { return this.login.controls; }

  onSubmit() {
    if (this.login.invalid) {
      return;
    }
    this.loading = true;
    this.httpServices.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['/welcome']);
            },
            error => {
              console.log(error);
              this.loading = false;
            });
  }

  ngOnDestroy() {
    this.clickEventsubscription.unsubscribe();
  } 
}
