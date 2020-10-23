import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { TrajetModel } from '../model/trajet.model';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

	private trajets:Array<TrajetModel> = [];

	constructor(private fireDB: AngularFireDatabase) {
		this.getToDatabase();
	}

	getTrajet(idTrajet:string):TrajetModel{
		let trajet:TrajetModel;
		this.fireDB.database.ref('/Trajet/'+idTrajet).once('value', function(data) {
			data.forEach(function(childSnapshot) {

				var childData = childSnapshot.val();

				trajet = new TrajetModel(childSnapshot.key,
										childData.depart,
										childData.arrivee,
									 	childData.dateDepart,
										childData.prix,
										childData.nbPlaces,
										childData.idUser);
			});
		});
		return trajet;
	}

	addTrajet(trajet){
		this.fireDB.list('/Trajet').push({
			depart: trajet.depart,
			arrivee: trajet.arrivee,
			dateDepart: trajet.dateDepart,
			prix: trajet.prix,
			nbPlaces: trajet.nbPlaces,
			idUser: trajet.idUser
		});
	}

	getTrajets():TrajetModel[] {
		return this.trajets;
	}

	getAllTrajet(email:string):TrajetModel[]{ // Pour récupérer les trajets d'un chauffeur 
		let allTrajects:Array<TrajetModel> = [];
		this.trajets = this.getToDatabase();
		this.fireDB.database.ref('/Trajet').orderByChild('idUser').equalTo(email).on('value', function(data) {
			allTrajects = [];
			data.forEach(function(childSnapshot) {

				var childData = childSnapshot.val();

				let trajet = new TrajetModel(childSnapshot.key,
									 childData.depart,
									 childData.arrivee,
									 childData.dateDepart,
									 childData.prix,
									 childData.nbPlaces,
									 childData.idUser);
				allTrajects.push(trajet);
			});
		});
		return allTrajects;
	}

	updateTrajet(trajet:TrajetModel){
		this.fireDB.list('/Trajet').update(trajet.key, {
			depart: trajet.depart,
			arrivee: trajet.arrivee,
			dateDepart: trajet.dateDepart,
			prix: trajet.prix,
			nbPlaces: trajet.nbPlaces,
			idUser: trajet.idUser
		});
	}

	deleteTrajet(trajet:TrajetModel){
		this.fireDB.list('/Trajet').remove(trajet.key);
	}

	rechercheTrajet(departP:string,arriveeP:string):TrajetModel[]{
		let allTrajects:TrajetModel[] = [];
		let depart:string = departP.toLowerCase();
		let arrivee:string = arriveeP.toLowerCase();

		if(depart.length>0 && arrivee.length>0){
			for (var i = 0; i < this.trajets.length; i++) {
				if (this.trajets[i].depart.toLowerCase() == depart && this.trajets[i].arrivee.toLowerCase() == arrivee) {
					allTrajects.push(this.trajets[i]);
				}
			};
		}else if(depart.length>0 && arrivee.length==0){
			for (var i = 0; i < this.trajets.length; i++) {
				if (this.trajets[i].depart.toLowerCase() == depart) {
					allTrajects.push(this.trajets[i]);
				}
			}
		}else if(depart.length==0 && arrivee.length>0){
			for (var i = 0; i < this.trajets.length; i++) {
				if (this.trajets[i].arrivee.toLowerCase() == arrivee) {
					allTrajects.push(this.trajets[i]);
				}
			}
		}
		return allTrajects;	
	}	

	getToDatabase(): TrajetModel[]{
		let allTrajects: Array<TrajetModel>;
		this.fireDB.database.ref('/Trajet').orderByKey().on('value', function(data) {
			allTrajects = [];
			data.forEach(function(childSnapshot) {

				var childData = childSnapshot.val();

				let trajet = new TrajetModel(childSnapshot.key,
									 childData.depart,
									 childData.arrivee,
									 childData.dateDepart,
									 childData.prix,
									 childData.nbPlaces,
									 childData.idUser);
				allTrajects.push(trajet);
			});
		});
		this.trajets = allTrajects;
		return allTrajects;
	}
}
