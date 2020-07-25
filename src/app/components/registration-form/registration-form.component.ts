import { Component, OnInit } from '@angular/core';
import { registrationFormFieldsResponseExample } from '../../models/doc.models';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

function returnLabelNameForInput(label: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isValid = control.value;
    return  !isValid ? {'label': { value: label + ' is required'}} : null;
  };
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})


export class RegistrationFormComponent implements OnInit {
  fields = registrationFormFieldsResponseExample;
  group: FormGroup;
  btn: string = 'Register';
  loading: boolean = false;
  fieldTextType: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.group = this.createControl();
    console.log(this.group)
    console.log(this.fields)
    console.log(this.f)
  }

  // Returning controls helper
  get f() { return this.group.controls; }

  onSubmit() {
    if (this.group.invalid) {
      return;
    }
    this.loading = true;

  
  }

  toggleFieldTextType(input: any) {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.fieldTextType = !this.fieldTextType;
  }

  // Create Controls
  createControl() {
    const group = this.fb.group({});
      this.fields.forEach(field => {
        const control = this.fb.control('', this.bindValidations(field.required, field.validations, field.label));
        group.addControl(field.name, control);
      });
    return group;
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
            returnLabelNameForInput(label)
          ]));
        });
      return validList;
    }
    return null;
  }

}
