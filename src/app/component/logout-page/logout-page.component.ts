import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {
  lagoutForm !:FormGroup
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.lagoutForm = this.fb.group({
      emailAddress: ['',[Validators.required, Validators.pattern("[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")]],
      password:['', [Validators.required, Validators.minLength(8)]]
    });


  }

  get f() {
    return this.lagoutForm.controls;
  }

  get emailAddress() {
    return this.lagoutForm.get('emailAddress');
  }

  get password() {
    return this.lagoutForm.get('password');
  }

  onSubmit(){
    if(this.lagoutForm.invalid){
      return
    }
  }
message:string='';
  logIn(){
    this.message = "LogIn Successfully!"
    this.router.navigateByUrl("/");
  }
}
