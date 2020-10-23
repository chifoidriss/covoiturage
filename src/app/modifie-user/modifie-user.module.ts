import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifieUserPageRoutingModule } from './modifie-user-routing.module';

import { ModifieUserPage } from './modifie-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifieUserPageRoutingModule
  ],
  declarations: [ModifieUserPage]
})
export class ModifieUserPageModule {}
