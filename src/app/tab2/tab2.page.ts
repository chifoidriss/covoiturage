import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TrajetService } from '../service/trajet.service';
import { TrajetModel } from '../model/trajet.model';

import { ReservationPage } from '../reservation/reservation.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	depart = '';
	arrivee = '';

	trajets:TrajetModel[] = [];

	finish:boolean = false;

	constructor(private modalCtrl: ModalController,
				private trajetService: TrajetService) {}

	async reserver(trajet){
		const modal = await this.modalCtrl.create({
		  component: ReservationPage,
		  componentProps: {trajet: trajet}
		});
		return await modal.present();
	}

	search(){
		this.trajets = this.trajetService.rechercheTrajet(this.depart,this.arrivee);
		this.finish = true;
	}

}
