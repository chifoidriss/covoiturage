export class TrajetModel{
    
    constructor(public key:string,
                public depart:string,
                public arrivee:string,
                public dateDepart:Date,
                public prix:number,
                public nbPlaces:number,
                public idUser:string){ }

}