import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

	private users:UserModel[] = [];

	constructor(private fireDB: AngularFireDatabase,
				private fireAuth: AngularFireAuth) {
		this.users = this.getToDatabase();
	}

	getUser1(email:string):UserModel{
		let listUsers = this.getToDatabase();
		for (var i = 0; i < listUsers.length; i++) {
			if (listUsers[i].email.toLowerCase() == email.toLowerCase()) {
				return listUsers[i];
			}
		}
		return null;
	}

	getUser(email:string):UserModel{
		let user:UserModel;
		this.fireDB.database.ref('/User').orderByChild('email').equalTo(email).on('value', function (data) {
			data.forEach(function(childSnapshot) {

				var childData = childSnapshot.val();

				user = new UserModel(childSnapshot.key,
									 childData.nom,
									 childData.prenom,
									 childData.email,
									 childData.phone);
			});
		});
		return user;
	}

	connectUser(email:string,password:string){
		return new Promise((resolve,reject) => {
			this.fireAuth.auth.signInWithEmailAndPassword(email.trim(),password).then(
				() => { resolve(); },
				(error) => { reject(error); }
			);
		});
	}

	addUser(user){
		this.fireDB.list('/User').push({
			nom: user.nom.toUpperCase(),
			prenom: user.prenom,
			email: user.email.trim().toLowerCase(),
			phone: user.phone
		});
	}

	createNewUser(email:string,password:string){
		return new Promise((resolve,reject) => {
			this.fireAuth.auth.createUserWithEmailAndPassword(email.trim(),password).then(
				() => { resolve(); },
				(error) => { reject(error); }
			);
		});
	}

	updateUser(user:UserModel){
		this.fireDB.list('/User').update(user.key, {
			nom: user.nom.toUpperCase(),
			prenom: user.prenom,
			email: user.email.trim().toLowerCase(),
			phone: user.phone
		});
	}

	deleteUser(user:UserModel){
		this.fireDB.list('/User').remove(user.key);
	}

	logout(){
		this.fireAuth.auth.signOut();
	}

	getToDatabase(): UserModel[]{
		let usersToDB: UserModel[] = [];

		this.fireDB.list('/User').snapshotChanges(['child_added','child_changed']).subscribe(data => {
			// usersToDB = [];
			data.forEach(action => {
				usersToDB.push(
					new UserModel(action.payload.key,
								  action.payload.exportVal().nom,
								  action.payload.exportVal().prenom,
								  action.payload.exportVal().email,
								  action.payload.exportVal().phone)
				);
			});
		});
		return usersToDB;
	}
}