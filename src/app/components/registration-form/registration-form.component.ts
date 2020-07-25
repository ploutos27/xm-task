import { Component, OnInit } from '@angular/core';
import { registrationFormFieldsResponseExample } from '../../models/doc.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})

export class RegistrationFormComponent implements OnInit {
  fields = registrationFormFieldsResponseExample;
  group: FormGroup;

  constructor(private fb: FormBuilder) { }

  createControl() {
    const group = this.fb.group({});
      this.fields.forEach(field => {
        const control = this.fb.control(
          field.name, Validators.required
        );
        group.addControl(field.name, control);
      });
      return group;
    }

    bindValidations(f: any) {
      if (f.required && f.validations.length > 0) {
        const validList = [];
        f.validations.forEach(valid => validList.push(valid.value));
        return Validators.compose(validList);
      }
      //return null;
    }

  ngOnInit(): void {
    this.group = this.createControl();
    console.log(this.fields)
  }

}
