import { Component } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';

import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-modifie-user',
  templateUrl: './modifie-user.page.html',
  styleUrls: ['./modifie-user.page.scss'],
})
export class ModifieUserPage {

	user:UserModel;

	constructor(private modalCtrl: ModalController,
              	private toastCtrl: ToastController,
              	private navParams: NavParams,
              	private userService: UserService) {

		this.user = navParams.get('user');
	}

	close(){
    	this.modalCtrl.dismiss();
 	}

	async updateUser(){
		this.userService.updateUser(this.user);

		const toast = await this.toastCtrl.create({
		  message: 'Modification réussie!',
		  showCloseButton: true,
		  position: 'top',
		  duration: 5000
		});
		await toast.present();

		this.modalCtrl.dismiss();
	}

}
