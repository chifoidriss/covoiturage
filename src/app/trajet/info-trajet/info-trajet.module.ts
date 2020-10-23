import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTrajetPageRoutingModule } from './info-trajet-routing.module';

import { InfoTrajetPage } from './info-trajet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTrajetPageRoutingModule
  ],
  declarations: [InfoTrajetPage]
})
export class InfoTrajetPageModule {}
