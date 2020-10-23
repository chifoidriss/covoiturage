import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage {

  errorMessage:string;

  constructor(private navCtrl: NavController,
              private formB: FormBuilder,
              private userService: UserService) { }

  userReg:FormGroup = this.formB.group({
  	nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  	prenom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  	email: ['', [Validators.required, Validators.email]],
  	phone: ['', [Validators.required, Validators.pattern('(^6[56789]|^2[234])([0-9]){7}$')]],
  	password: ['', [Validators.required, Validators.minLength(6)]],
  	confirm: ['', [Validators.required, Validators.minLength(6)]],
  	accord: [undefined, Validators.required]
  });

  private user;

  signup(){
    this.user = {
      nom: this.userReg.get('nom').value,
      prenom: this.userReg.get('prenom').value,
      email: this.userReg.get('email').value,
      phone: this.userReg.get('phone').value
    };

    let email = this.userReg.get('email').value;
    let password = this.userReg.get('password').value;
    let confirm = this.userReg.get('confirm').value;

    if(password === confirm){
      this.userService.createNewUser(email,password).then(
        () => {
          this.userService.addUser(this.user);
          this.navCtrl.navigateForward('/login');
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }else{
      this.errorMessage = "Les deux mots de passes ne correspondent pas!";
    }
  }

}
