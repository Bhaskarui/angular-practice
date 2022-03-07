import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isReg: boolean = false;
  registerForm!: FormGroup;
  submitted: boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email:['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
     
     
        password: ['', [Validators.required, Validators.minLength(10)]],
        cpasword:['', [Validators.required]]
    }, {Validators: this.confirmedValidator('password', 'cpassword')})
  }

  //   registrer() {
  // this.isReg = true;
  //   }

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  // get cpassword() {
  //   return this.registerForm.get('cpassword');
  // }


  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }
  }

}
