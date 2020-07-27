import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-button',
  templateUrl: './registration-button.component.html',
  styleUrls: ['./registration-button.component.scss']
})

export class RegistrationButtonComponent implements OnInit {
  name: string = 'Click to register';

  constructor() {  }

  ngOnInit(): void { }

}
