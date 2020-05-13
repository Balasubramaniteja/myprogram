import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChefLoginRegisterComponent } from './chef-login-register/chef-login-register.component';
import { UserLoginRegisterComponent } from './user-login-register/user-login-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChefRegisterComponent } from './chef-register/chef-register.component';


const routes: Routes = [
  {path: 'chef' , component : ChefLoginRegisterComponent},
  {path: 'user' , component : UserLoginRegisterComponent},
  {path: '' , component : AboutUsComponent},
  {path: 'chefRegister' , component : ChefRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
