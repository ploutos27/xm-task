import { Component, OnInit } from '@angular/core';
import { registrationFormFieldsResponseExample } from '../../models/doc.models';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

function dynamicMessages(label: string, data: any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isValid = control.value;
      if (!isValid) {
        return {
          'label': { value: label + ' is required' },
        } 
      } else {
        if (data.name === 'regex') {
          let regex =  new RegExp(data.value);
            if (!regex.test(isValid)) {  
              return {
                'regex': { value: data },
              } 
            }
        }
        if (data.name === 'maxlength') {
          if (isValid.length > data.value) {
            return {
              'max': { value: data },
            } 
          }
        }
        if (data.name === 'minlength') {
          if (isValid.length < data.value) {
            return {
              'min': { value: data },
            } 
          }
        }
      }
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

  constructor(private fb: FormBuilder, 
    private httpServices: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.group = this.createControl();
  }

  // Returning controls helper
  get f() { return this.group.controls; }

  onSubmit() {
    if (this.group.invalid) {
      return;
    }
    this.loading = true;

    this.httpServices.login(this.group.value)
    this.router.navigate(['/welcome']);
  }

  toggleFieldTextType(input: any) {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.fieldTextType = !this.fieldTextType;
  }

  // Create Controls
  createControl() {
    const group = this.fb.group({});
      this.fields.forEach(field => {
        const control = this.fb.control(
          '', 
          this.bindValidations(field.required, field.validations, field.label)
        );
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
            dynamicMessages(label, valid)
          ]));
        });
      return validList;
    }
    return null;
  }

}
