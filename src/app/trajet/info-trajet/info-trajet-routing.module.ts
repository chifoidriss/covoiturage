import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoTrajetPage } from './info-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoTrajetPageRoutingModule {}
