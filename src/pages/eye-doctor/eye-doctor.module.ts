import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EyeDoctor } from './eye-doctor';

@NgModule({
  declarations: [
    EyeDoctor,
  ],
  imports: [
    IonicPageModule.forChild(EyeDoctor),
  ],
  exports: [
    EyeDoctor
  ]
})
export class EyeDoctorModule {}
