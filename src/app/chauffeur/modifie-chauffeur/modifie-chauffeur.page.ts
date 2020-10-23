import { Component } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

import { ChauffeurModel } from '../../model/chauffeur.model';
import { ChauffeurService } from '../../service/chauffeur.service';

@Component({
  selector: 'app-modifie-chauffeur',
  templateUrl: './modifie-chauffeur.page.html',
  styleUrls: ['./modifie-chauffeur.page.scss'],
})
export class ModifieChauffeurPage {
	
	chauffeur:ChauffeurModel;

	constructor(private chauffeurService: ChauffeurService,
				private modalCtrl: ModalController,
				private navParams: NavParams,
				private toastCtrl: ToastController) {

		this.chauffeur = navParams.get('chauffeur');
	}

	close(){
		this.modalCtrl.dismiss();
	}

	async updateChauffeur(){
		this.chauffeurService.updateChauffeur(this.chauffeur);

		const toast = await this.toastCtrl.create({
			message: 'Chauffeur modifié avec succès!',
			showCloseButton: true,
			position: 'top',
			duration: 5000
	    });
	    await toast.present();
	    this.modalCtrl.dismiss();
	}

}
