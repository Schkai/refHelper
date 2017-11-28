import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Recreation } from './recreation';

@NgModule({
  declarations: [
    Recreation,
  ],
  imports: [
    IonicPageModule.forChild(Recreation),
  ],
  exports: [
    Recreation
  ]
})
export class RecreationModule {}
