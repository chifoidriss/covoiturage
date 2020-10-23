import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

import { TrajetService } from '../service/trajet.service';
import { TrajetModel } from '../model/trajet.model';

import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';

import { VoitureModel } from '../model/voiture.model';
import { VoitureService } from '../service/voiture.service';

import { ChauffeurModel } from '../model/chauffeur.model';
import { ChauffeurService } from '../service/chauffeur.service';

import { ModifieUserPage } from '../modifie-user/modifie-user.page';
import { ModifieTrajetPage } from '../modifie-trajet/modifie-trajet.page';
import { AjoutVoiturePage } from '../voiture/ajout-voiture/ajout-voiture.page';
import { ModifieVoiturePage } from '../voiture/modifie-voiture/modifie-voiture.page';
import { InfoTrajetPage } from '../trajet/info-trajet/info-trajet.page';
import { AjoutChauffeurPage } from '../chauffeur/ajout-chauffeur/ajout-chauffeur.page';
import { ModifieChauffeurPage } from '../chauffeur/modifie-chauffeur/modifie-chauffeur.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	user:UserModel;
	myTrajets:TrajetModel[] = [];
	voiture:VoitureModel;
	chauffeur:ChauffeurModel;

	constructor(private modalCtrl: ModalController,
				private toastCtrl: ToastController,
				private fireAuth: AngularFireAuth,
				private userService: UserService,
				private trajetService: TrajetService,
				private voitureService: VoitureService,
				private chauffeurService: ChauffeurService) { }

	ngOnInit(){
		this.fireAuth.authState.subscribe(auth => {
			if (auth) {
				this.user = this.userService.getUser(auth.email)
				this.chauffeur = this.chauffeurService.getChauffeur(auth.email);
				this.myTrajets = this.trajetService.getAllTrajet(auth.email);
				this.voiture = this.voitureService.getVoiture(auth.email);
			}
		});
	}

	logout(){
		this.userService.logout();
	}

	async updateUser(){
		const modal = await this.modalCtrl.create({
			component: ModifieUserPage,
			componentProps: {user: this.user}
		});
		return await modal.present();
	}

	async updateChauffeur(){
		const modal = await this.modalCtrl.create({
			component: ModifieChauffeurPage,
			componentProps: {chauffeur: this.chauffeur}
		});
		return await modal.present();
	}

	async updateVoiture(){
		const modal = await this.modalCtrl.create({
			component: ModifieVoiturePage,
			componentProps: {voiture: this.voiture}
		});
		return await modal.present();
	}

	async infoTrajet(trajet){
		const modal = await this.modalCtrl.create({
			component: InfoTrajetPage,
			componentProps: {trajet: trajet}
		});
		return await modal.present();
	}


	async ajoutVoiture(){
		const modal = await this.modalCtrl.create({
			component: AjoutVoiturePage,
		});
		return await modal.present();
	}

	async ajoutChauffeur(){
		const modal = await this.modalCtrl.create({
			component: AjoutChauffeurPage,
		});
		return await modal.present();
	}
	
	async upTrajet(trajet:TrajetModel){
		const modal = await this.modalCtrl.create({
			component: ModifieTrajetPage,
			componentProps: {trajet: trajet}
		});
		return await modal.present();
	}
	
	async delTrajet(trajet:TrajetModel){
		this.trajetService.deleteTrajet(trajet);
		const toast = await this.toastCtrl.create({
		  message: 'Trajet supprimé avec succès!',
		  showCloseButton: true,
		  position: 'top',
		  duration: 5000
		});
		return await toast.present();
	}
}
