import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifieTrajetPage } from './modifie-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: ModifieTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifieTrajetPageRoutingModule {}
