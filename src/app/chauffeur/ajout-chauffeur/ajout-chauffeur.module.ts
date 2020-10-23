import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutChauffeurPageRoutingModule } from './ajout-chauffeur-routing.module';

import { AjoutChauffeurPage } from './ajout-chauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutChauffeurPageRoutingModule
  ],
  declarations: [AjoutChauffeurPage]
})
export class AjoutChauffeurPageModule {}
