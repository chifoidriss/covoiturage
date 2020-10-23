import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { ModifieUserPageModule } from './modifie-user/modifie-user.module';
import { ReservationPageModule } from './reservation/reservation.module';
import { ModifieTrajetPageModule } from './modifie-trajet/modifie-trajet.module';
import { AjoutVoiturePageModule } from './voiture/ajout-voiture/ajout-voiture.module';
import { ModifieVoiturePageModule } from './voiture/modifie-voiture/modifie-voiture.module';
import { InfoTrajetPageModule } from './trajet/info-trajet/info-trajet.module';
import { AjoutChauffeurPageModule } from './chauffeur/ajout-chauffeur/ajout-chauffeur.module';
import { ModifieChauffeurPageModule } from './chauffeur/modifie-chauffeur/modifie-chauffeur.module';

export const firebaseConfig = {
  apiKey: "AIzaSyBeFF2YCgii1vVP1TmQAlwuIkzgDoaibtM",
  authDomain: "covoiturage-f7392.firebaseapp.com",
  databaseURL: "https://covoiturage-f7392.firebaseio.com",
  projectId: "covoiturage-f7392",
  storageBucket: "covoiturage-f7392.appspot.com",
  messagingSenderId: "83166237286",
  appId: "1:83166237286:web:53288b4694da8b4ad5d3a7",
  measurementId: "G-3W4MX4JQCY"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  	BrowserModule, 
  	IonicModule.forRoot(), 
  	AppRoutingModule,
  	AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ModifieUserPageModule,
    ReservationPageModule,
    ModifieTrajetPageModule,
    AjoutVoiturePageModule,
    ModifieVoiturePageModule,
    InfoTrajetPageModule,
    AjoutChauffeurPageModule,
    ModifieChauffeurPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
