import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chef-register',
  templateUrl: './chef-register.component.html',
  styleUrls: ['./chef-register.component.css']
})
export class ChefRegisterComponent implements OnInit {
     chefRegister: FormGroup;
     register: true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.chefRegister = this.formBuilder.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      confrompassword : ['', Validators.required],
      mobilenumber : ['', [Validators.required, Validators.pattern('[0-9]{0-10}')]]
    });
  }
  onSubmit() {
    this.register = true;
  }

get firstname() {
  return this.chefRegister.get('firstname');
}
get lastname() {
  return this.chefRegister.get('lastname');
}
get email() {
  return this.chefRegister.get('email');
}
get password() {
  return this.chefRegister.get('password');
}
get confrompassword() {
  return this.chefRegister.get('confrompassword');
}
get mobilenumber() {
  return this.chefRegister.get('mobilenumber');
}

}
