import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutVoiturePageRoutingModule } from './ajout-voiture-routing.module';

import { AjoutVoiturePage } from './ajout-voiture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutVoiturePageRoutingModule
  ],
  declarations: [AjoutVoiturePage]
})
export class AjoutVoiturePageModule {}
