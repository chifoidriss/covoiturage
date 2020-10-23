import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  errorMessage:string;

  userLog:FormGroup = this.formB.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private navCtrl: NavController,
              private formB: FormBuilder,
              private userService: UserService) { }

  login(){
    let email = this.userLog.get('email').value;
    let password = this.userLog.get('password').value;

    this.userService.connectUser(email,password).then(
      () => {
        this.navCtrl.navigateForward(['/tabs/profile']);      
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
