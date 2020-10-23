import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { VoitureModel } from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

	constructor(private fireDB: AngularFireDatabase) { }

	addVoiture(voiture){
		this.fireDB.list('/Voiture').push({
			num: voiture.num,
			marque: voiture.marque,
			modele: voiture.modele,
			couleur: voiture.couleur,
			idUser: voiture.idUser
		});
	}

	getVoiture(email):VoitureModel{
		let voiture:VoitureModel;
		this.fireDB.database.ref('/Voiture').orderByChild('idUser').equalTo(email).on('value', function(data) {
			data.forEach(function(childSnapshot) {

				var childData = childSnapshot.val();
				
				voiture = new VoitureModel(childSnapshot.key,
									 childData.num,
									 childData.marque,
									 childData.modele,
									 childData.couleur,
									 childData.idUser);
			});
		});
		return voiture;
	}

	updateVoiture(voiture:VoitureModel){
		this.fireDB.list('/Voiture').update(voiture.key, {
			num: voiture.num,
			marque: voiture.marque,
			modele: voiture.modele,
			couleur: voiture.couleur,
			idUser: voiture.idUser
		});
	}

	deleteVoiture(voiture:VoitureModel){
		this.fireDB.list('/Voiture').remove(voiture.key);
	}

}
