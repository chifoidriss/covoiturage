import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { TrajetService } from '../service/trajet.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { AfterViewInit,ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-ajout-trajet',
  templateUrl: './ajout-trajet.page.html',
  styleUrls: ['./ajout-trajet.page.scss'],
})
export class AjoutTrajetPage {
  @ViewChild('mapElement', { static: false }) mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;

  trajet:any = {
    depart: '',
    arrivee: '',
    dateDepart: new Date().toISOString(),
    prix: null,
    nbPlaces: null
  };

  email:string;

  constructor(private fireAuth: AngularFireAuth,
              private navCtrl: NavController,
              private trajetService: TrajetService,
              private fb: FormBuilder) {

    this.fireAuth.authState.subscribe(auth => {
      if (auth) {
        this.email = auth.email;
      }
    });
    this.createDirectionForm();
  }
  
  ngOnInit() {
  }
  
  createDirectionForm() {
    this.directionForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
   
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: { lat:  4.061536, lng: 9.786072 }
    });
    this.directionsDisplay.setMap(map);
  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: formValues.source,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }



  ajoutTrajet(){
    let newTrajet = {
      depart: this.trajet.depart,
      arrivee: this.trajet.arrivee,
      dateDepart: this.trajet.dateDepart,
      prix: this.trajet.prix,
      nbPlaces: this.trajet.nbPlaces,
      idUser: this.email
    };
    this.trajetService.addTrajet(newTrajet);
    this.navCtrl.pop();
  }

}
