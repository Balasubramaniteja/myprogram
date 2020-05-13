import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChefComponent } from './chef/chef.component';
import { UserComponent } from './user/user.component';
import { ChefLoginRegisterComponent } from './chef-login-register/chef-login-register.component';
import { UserLoginRegisterComponent } from './user-login-register/user-login-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChefRegisterComponent } from './chef-register/chef-register.component';
@NgModule({
  declarations: [
    AppComponent,
    ChefComponent,
    UserComponent,
    ChefLoginRegisterComponent,
    UserLoginRegisterComponent,
    AboutUsComponent,
    ChefRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
