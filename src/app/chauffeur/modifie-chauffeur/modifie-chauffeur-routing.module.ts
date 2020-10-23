import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifieChauffeurPage } from './modifie-chauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifieChauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifieChauffeurPageRoutingModule {}
