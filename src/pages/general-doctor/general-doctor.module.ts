import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralDoctor } from './general-doctor';

@NgModule({
  declarations: [
    GeneralDoctor,
  ],
  imports: [
    IonicPageModule.forChild(GeneralDoctor),
  ],
  exports: [
    GeneralDoctor
  ]
})
export class GeneralDoctorModule {}
