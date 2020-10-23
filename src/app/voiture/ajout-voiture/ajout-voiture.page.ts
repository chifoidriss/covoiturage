import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

import { VoitureModel } from '../../model/voiture.model';
import { VoitureService } from '../../service/voiture.service';

@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.page.html',
  styleUrls: ['./ajout-voiture.page.scss'],
})
export class AjoutVoiturePage {

	email:string;
  
  voiture:any = {
		num: '',
		marque: '',
		modele: '',
		couleur: ''
	};

  constructor(private fireAuth: AngularFireAuth,
              private modalCtrl: ModalController,
  			      private toastCtrl: ToastController,
  			      private voitureService: VoitureService) {

    this.fireAuth.authState.subscribe(auth => {
      if (auth) {
        this.email = auth.email;
      }
    }); 
  }

  close(){
  	this.modalCtrl.dismiss();
  }

  async ajoutVoiture(){
  	let newVoiture = {
  		num: this.voiture.num,
  		marque: this.voiture.marque,
  		modele: this.voiture.modele,
  		couleur: this.voiture.couleur,
  		idUser: this.email
  	};

  	this.voitureService.addVoiture(newVoiture);

  	const toast = await this.toastCtrl.create({
		  message: 'Voiture ajoutée avec succès!',
		  showCloseButton: true,
		  position: 'top',
		  duration: 5000
		});
	  await toast.present();

    this.modalCtrl.dismiss();
  }

}
