import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AjoutTrajetPageRoutingModule } from './ajout-trajet-routing.module';

import { AjoutTrajetPage } from './ajout-trajet.page';
const routes:Routes = [
  {
    path: '',
    component: AjoutTrajetPage 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AjoutTrajetPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AjoutTrajetPage]
})
export class AjoutTrajetPageModule {}
