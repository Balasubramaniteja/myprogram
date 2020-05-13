import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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






