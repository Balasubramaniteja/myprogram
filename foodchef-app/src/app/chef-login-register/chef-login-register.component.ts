import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chef-login-register',
  templateUrl: './chef-login-register.component.html',
  styleUrls: ['./chef-login-register.component.css']
})
export class ChefLoginRegisterComponent implements OnInit {
      chefLogin: FormGroup;
      Submit: true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.chefLogin = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

   onSubmit() {
     this.Submit = true;
   }
  get email() {
   return this.chefLogin.get('email');
  }
  get password() {
    return this.chefLogin.get('password');
  }

}
