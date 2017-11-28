import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildrensDoctor } from './childrens-doctor';

@NgModule({
  declarations: [
    ChildrensDoctor,
  ],
  imports: [
    IonicPageModule.forChild(ChildrensDoctor),
  ],
  exports: [
    ChildrensDoctor
  ]
})
export class ChildrensDoctorModule {}
