import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifieVoiturePageRoutingModule } from './modifie-voiture-routing.module';

import { ModifieVoiturePage } from './modifie-voiture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifieVoiturePageRoutingModule
  ],
  declarations: [ModifieVoiturePage]
})
export class ModifieVoiturePageModule {}
