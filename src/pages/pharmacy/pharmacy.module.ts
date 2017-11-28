import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pharmacy } from './pharmacy';

@NgModule({
  declarations: [
    Pharmacy,
  ],
  imports: [
    IonicPageModule.forChild(Pharmacy),
  ],
  exports: [
    Pharmacy
  ]
})
export class PharmacyModule {}
