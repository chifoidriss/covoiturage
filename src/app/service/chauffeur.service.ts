import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { ChauffeurModel } from '../model/chauffeur.model';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService { 

	constructor(private fireDB: AngularFireDatabase) { }

	addChauffeur(chauffeur){
		this.fireDB.list('/Chauffeur').push({
			cni: chauffeur.cni,
			permis: chauffeur.permis,
			categorie: chauffeur.categorie,
			idUser: chauffeur.idUser
		});
	}

	getChauffeur(email:string):ChauffeurModel{
		let chauffeur:ChauffeurModel;
		this.fireDB.database.ref('/Chauffeur').orderByChild('idUser').equalTo(email).on('value', function (data) {
			data.forEach(function(childSnapshot) {

				var childData = childSnapshot.val();

				chauffeur = new ChauffeurModel(childSnapshot.key,
									 childData.cni,
									 childData.permis,
									 childData.categorie,
									 childData.idUser);
			});
		});
		return chauffeur;
	}

	updateChauffeur(chauffeur:ChauffeurModel){
		this.fireDB.list('/Chauffeur').update(chauffeur.key, {
			cni: chauffeur.cni,
			permis: chauffeur.permis,
			categorie: chauffeur.categorie,
			idUser: chauffeur.idUser
		});
	}

	deleteChauffeur(chauffeur:ChauffeurModel){
		this.fireDB.list('/Chauffeur').remove(chauffeur.key);
	}
  
}
