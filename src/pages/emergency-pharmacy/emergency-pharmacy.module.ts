import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyPharmacy } from './emergency-pharmacy';

@NgModule({
  declarations: [
    EmergencyPharmacy,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyPharmacy),
  ],
  exports: [
    EmergencyPharmacy
  ]
})
export class EmergencyPharmacyModule {}
