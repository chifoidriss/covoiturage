import { Component } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';

import { VoitureModel } from '../../model/voiture.model';
import { VoitureService } from '../../service/voiture.service';

@Component({
  selector: 'app-modifie-voiture',
  templateUrl: './modifie-voiture.page.html',
  styleUrls: ['./modifie-voiture.page.scss'],
})
export class ModifieVoiturePage {

	voiture:VoitureModel;

	constructor(private modalCtrl: ModalController,
				private toastCtrl: ToastController,
				private navParams: NavParams,
				private voitureService: VoitureService) {

		this.voiture = navParams.get('voiture');
	}

	close(){
		this.modalCtrl.dismiss();
	}

	async updateVoiture(){
		
		this.voitureService.updateVoiture(this.voiture);

		const toast = await this.toastCtrl.create({
		  	message: 'Voiture modifiée avec succès!',
		  	showCloseButton: true,
		  	position: 'top',
		  	duration: 5000
		});
	  	await toast.present();
		this.modalCtrl.dismiss();
	}

}
