import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Religion } from './religion';

@NgModule({
  declarations: [
    Religion,
  ],
  imports: [
    IonicPageModule.forChild(Religion),
  ],
  exports: [
    Religion
  ]
})
export class ReligionModule {}
