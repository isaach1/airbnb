import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalDetails2Page } from './rental-details2.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetails2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalDetails2Page]
})
export class RentalDetails2PageModule {}
