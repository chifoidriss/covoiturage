import { Component } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';

import { TrajetService } from '../service/trajet.service';
import { TrajetModel } from '../model/trajet.model';

@Component({
  selector: 'app-modifie-trajet',
  templateUrl: './modifie-trajet.page.html',
  styleUrls: ['./modifie-trajet.page.scss'],
})
export class ModifieTrajetPage {

  trajet:TrajetModel;

  constructor(private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private navParams: NavParams,
              private trajetService: TrajetService) {

    this.trajet = this.navParams.get('trajet');
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async updateTrajet(){
    this.trajetService.updateTrajet(this.trajet);
    
    const toast = await this.toastCtrl.create({
      message: 'Modification réussie!',
      showCloseButton: true,
      position: 'top',
      duration: 5000
    });
    await toast.present();
    
    this.modalCtrl.dismiss();
  }

}
