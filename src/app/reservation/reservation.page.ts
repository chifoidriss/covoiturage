import { Component } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

import { TrajetModel } from '../model/trajet.model';

import { UserService } from '../service/user.service';
import { UserModel } from '../model/user.model';

import { ReservationService } from '../service/reservation.service';
import { ReservationModel } from '../model/reservation.model';

import { VoitureService } from '../service/voiture.service';
import { VoitureModel } from '../model/voiture.model';

import { ChauffeurModel } from '../model/chauffeur.model';
import { ChauffeurService } from '../service/chauffeur.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage {

	trajet:TrajetModel;
	email:string;
	nbR:number;
	
	constructor(private fireAuth: AngularFireAuth,
				private modalCtrl: ModalController,
				private toastCtrl: ToastController,
				private navParams: NavParams,
				private userService: UserService,
				private reserveService: ReservationService,
				private voitureService: VoitureService,
				private chauffeurService: ChauffeurService) {
		
		this.trajet = navParams.get('trajet');

		this.fireAuth.authState.subscribe(auth => {
			if (auth) {
				this.email = auth.email;
			}
		});

		this.nbR = this.reserveService.getTrajetReservation(this.trajet.key).length;
	}

	user(email:string):UserModel{
		return this.userService.getUser(email);
	}

	voiture(email:string):VoitureModel{
		return this.voitureService.getVoiture(email);
	}

	chauffeur(email:string):ChauffeurModel{
		return this.chauffeurService.getChauffeur(email);
	}

	close() {
		this.modalCtrl.dismiss();
	}

	async reserver() {
		let R = {idTrajet:this.trajet.key, idUser:this.email};
		this.reserveService.addReservation(R);
		
		const toast = await this.toastCtrl.create({
              message: 'Réservation éffectuée avec succès!',
              showCloseButton:true,
              closeButtonText:'OK',
              position: 'top',
              duration: 5000
            });
		this.modalCtrl.dismiss();
        return await toast.present();
	}

}
