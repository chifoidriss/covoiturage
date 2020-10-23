import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private router: Router,
				private fireAuth: AngularFireAuth) { }

	canActivate(): Observable<boolean> | Promise<boolean> | boolean{
		return new Promise((resolve,reject) => {
			this.fireAuth.authState.subscribe(auth => {
				if (auth) {
					resolve(true);
				}else{
					this.router.navigate(['/login']);
					resolve(false);
				}
			});
		});
	}
}
