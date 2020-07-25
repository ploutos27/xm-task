import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registration-errors',
  templateUrl: './registration-errors.component.html',
  styleUrls: ['./registration-errors.component.scss']
})
export class RegistrationErrorsComponent implements OnInit {
  @Input() hasError: any;
  constructor() { }

  ngOnInit(): void {
  }

}
