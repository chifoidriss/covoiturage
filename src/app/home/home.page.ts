import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';

import { TrajetModel } from '../model/trajet.model';
import { TrajetService } from '../service/trajet.service';

import { ReservationPage } from '../reservation/reservation.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

	listTrajets: TrajetModel[];

	constructor(private modalCtrl: ModalController,
				private trajetService: TrajetService,
				private userService: UserService) {

		this.listTrajets = this.trajetService.getToDatabase();
	}

	user(email:string):UserModel{
		return this.userService.getUser(email);
	}

	async reservation(trajet:TrajetModel){
		const modal = await this.modalCtrl.create({
		  component: ReservationPage,
		  componentProps: {trajet: trajet}
		});
		return await modal.present();
	}

}
