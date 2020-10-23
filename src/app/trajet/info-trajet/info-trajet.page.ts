import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { TrajetModel } from '../../model/trajet.model';

import { UserService } from '../../service/user.service';
import { UserModel } from '../../model/user.model';

import { ReservationService } from '../../service/reservation.service';
import { ReservationModel } from '../../model/reservation.model';

@Component({
  selector: 'app-info-trajet',
  templateUrl: './info-trajet.page.html',
  styleUrls: ['./info-trajet.page.scss'],
})
export class InfoTrajetPage {

	trajet:TrajetModel;
	reservations:ReservationModel[] = [];
	nbR:number;

	constructor(private modalCtrl: ModalController,
				private navParams: NavParams,
				private userService: UserService,
				private reserveService: ReservationService) {

		this.trajet = navParams.get('trajet');
		this.reservations = reserveService.getTrajetReservation(this.trajet.key);
		this.nbR = this.reservations.length;
	}

	close(){
    	this.modalCtrl.dismiss();
	}

	user(email:string):UserModel{
		return this.userService.getUser(email);
	}

}
