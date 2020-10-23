import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifieChauffeurPageRoutingModule } from './modifie-chauffeur-routing.module';

import { ModifieChauffeurPage } from './modifie-chauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifieChauffeurPageRoutingModule
  ],
  declarations: [ModifieChauffeurPage]
})
export class ModifieChauffeurPageModule {}
