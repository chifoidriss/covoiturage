import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

	email:string;

	constructor(private fireAuth: AngularFireAuth) {
		this.fireAuth.authState.subscribe(auth => {
			if (auth) {
				this.email = auth.email;
			}
		}); 
	}

}
