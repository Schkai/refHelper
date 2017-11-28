import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hospital } from './hospital';

@NgModule({
  declarations: [
    Hospital,
  ],
  imports: [
    IonicPageModule.forChild(Hospital),
  ],
  exports: [
    Hospital
  ]
})
export class HospitalModule {}
