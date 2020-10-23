import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutTrajetPage } from './ajout-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutTrajetPageRoutingModule {}
