import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifieVoiturePage } from './modifie-voiture.page';

const routes: Routes = [
  {
    path: '',
    component: ModifieVoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifieVoiturePageRoutingModule {}
