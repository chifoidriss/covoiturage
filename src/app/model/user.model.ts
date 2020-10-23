export class UserModel {

	constructor(public key: string,
				public nom: string,
				public prenom: string,
				public email: string,
				public phone: number) {
	}

	// public setProfile(v : string) {
	// 	this.profile = v;
	// }

	// public getProfile(): string {
	// 	return this.profile;
	// }


}
