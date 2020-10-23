import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifieTrajetPageRoutingModule } from './modifie-trajet-routing.module';

import { ModifieTrajetPage } from './modifie-trajet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifieTrajetPageRoutingModule
  ],
  declarations: [ModifieTrajetPage]
})
export class ModifieTrajetPageModule {}
