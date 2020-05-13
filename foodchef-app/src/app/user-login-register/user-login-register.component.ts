import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login-register',
  templateUrl: './user-login-register.component.html',
  styleUrls: ['./user-login-register.component.css']
})
export class UserLoginRegisterComponent implements OnInit {

  userLogin: FormGroup;
     Submit: true;
  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userLogin  = this.formbuilder.group({
      username : [''],
      password : ['']
    });
  }
   onSubmit() {
     this.Submit =  true;
   }

}
