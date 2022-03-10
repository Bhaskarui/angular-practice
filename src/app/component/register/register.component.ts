import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")]],
    
        password: ['', [Validators.required, Validators.minLength(10)]],
        confirmPassword:['', [Validators.required]]
    }, {Validators: this.MustMatch('password', 'confirmPassword')})
  }

  //   registrer() {
  // this.isReg = true;
  //   }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
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

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    // if (this.registerForm.invalid) {
    //   return;
    // }
  }

 message:string = '';
  register(){
    this.message = "Registered Sucessfully!";
    this.router.navigate(["/logout"])
console.log(this.message)

  }

}
