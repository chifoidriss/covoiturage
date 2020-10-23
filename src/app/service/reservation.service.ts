import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { ReservationModel } from '../model/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

	private reservations:ReservationModel[] = [];

	constructor(private fireDB: AngularFireDatabase) {
		this.getToDatabase();
	}

	addReservation(reservation){
		this.fireDB.list('/Reservation').push({
			idTrajet: reservation.idTrajet,
			idUser: reservation.idUser
		});
	}

	deleteReserve(reservation:ReservationModel){
		this.fireDB.list('/Reservation').remove(reservation.key);
	}

	getUserReservation(email): ReservationModel[] {
		let allUserReservation:ReservationModel[] = [];
		for (var i = 0; i < this.reservations.length; i++) {
			if (this.reservations[i].idUser.toLowerCase() === email.toLowerCase()) {
				allUserReservation.push(this.reservations[i]);
			}
		}
		return allUserReservation;
	}

	getTrajetReservation(idTrajet:string): ReservationModel[] {
		let allTrajetReservation:ReservationModel[] = [];
		for (var i = 0; i < this.reservations.length; i++) {
			if (this.reservations[i].idTrajet == idTrajet) {
				allTrajetReservation.push(this.reservations[i]);
			}
		}
		return allTrajetReservation;
	}

	getToDatabase(){
		this.fireDB.list('/Reservation').snapshotChanges(['child_changed','child_added','child_removed','child_moved']).subscribe(data => {
			this.reservations = [];
			data.forEach(action => {
				this.reservations.push(
					new ReservationModel(action.payload.key,
									action.payload.exportVal().idTrajet,
									action.payload.exportVal().idUser)
				);
			});
		});
	}	

}
