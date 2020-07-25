import { Component, OnInit } from '@angular/core';
import { registrationFormFieldsResponseExample } from '../../models/doc.models';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})

export class RegistrationFormComponent implements OnInit {
  fields = registrationFormFieldsResponseExample;
  group: FormGroup;
  btn: string = 'Register';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.group = this.createControl();
    console.log(this.group);
    console.log(this.fields)
  }

  // Returning controls helper
  get f() { return this.group.controls; }

  // Create Controls
  createControl() {
    const group = this.fb.group({});
      this.fields.forEach(field => {
        const control = this.fb.control('', this.bindValidations(field.required, field.validations, field.label));
        group.addControl(field.name, control);
      });
    return group;
  }

  // bind messages on validators
  bindMessagesOnValidators() {
    return {
      errorField: {
        label: 'control',
      }
    }
  }

  // bind validations 
  bindValidations(isRequired: boolean, validations: any, label: string) {
    if (isRequired && validations.length > 0) {
      const validList = [];
        validations.forEach(valid => {
          validList.push(Validators.compose([
            Validators.required,
            Boolean(valid.name === 'regex') ? Validators.pattern(valid.value) : null,
            Boolean(valid.name === 'maxlength') ? Validators.maxLength(valid.value) : null,
            Boolean(valid.name === 'minlength') ? Validators.minLength(valid.value) : null,
          ]));
        });
      return validList;
    }
    return null;
  }

}
