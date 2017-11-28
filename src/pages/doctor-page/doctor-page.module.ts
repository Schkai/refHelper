import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { DoctorPage } from './doctor-page';

@NgModule({
  declarations: [
    DoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorPage),
  ],
  exports: [
    DoctorPage
  ]
})
export class DoctorPageModule {}
