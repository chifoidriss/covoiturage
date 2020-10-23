import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutVoiturePage } from './ajout-voiture.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutVoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutVoiturePageRoutingModule {}
