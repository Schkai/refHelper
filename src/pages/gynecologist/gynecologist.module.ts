import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gynecologist } from './gynecologist';

@NgModule({
  declarations: [
    Gynecologist,
  ],
  imports: [
    IonicPageModule.forChild(Gynecologist),
  ],
  exports: [
    Gynecologist
  ]
})
export class GynecologistModule {}
