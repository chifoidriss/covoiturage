import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

import { ChauffeurService } from '../../service/chauffeur.service';

@Component({
  selector: 'app-ajout-chauffeur',
  templateUrl: './ajout-chauffeur.page.html',
  styleUrls: ['./ajout-chauffeur.page.scss'],
})
export class AjoutChauffeurPage {

	chauffeur:any = {
		cni: '',
		permis: '',
		categorie: ''
	}
	
	email:string;

	constructor(private fireAuth: AngularFireAuth,
				private chauffeurService: ChauffeurService,
				private modalCtrl: ModalController,
				private toastCtrl: ToastController) {

		this.fireAuth.authState.subscribe(auth => {
			if (auth) {
				this.email = auth.email;
			}
		}); 
	}

	close(){
		this.modalCtrl.dismiss();
	}

	async ajoutChauffeur(){
		let newChaffeur = {
			cni: this.chauffeur.cni,
			permis: this.chauffeur.permis,
			categorie: this.chauffeur.categorie,
			idUser: this.email
		};

		this.chauffeurService.addChauffeur(newChaffeur);

		const toast = await this.toastCtrl.create({
	      message: 'Chauffeur ajouté avec succès!',
	      showCloseButton: true,
	      position: 'top',
	      duration: 5000
	    });
	    await toast.present();
	    this.modalCtrl.dismiss();
	}

}
