import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Authorities } from './authorities';

@NgModule({
  declarations: [
    Authorities,
  ],
  imports: [
    IonicPageModule.forChild(Authorities),
  ],
  exports: [
    Authorities
  ]
})
export class AuthoritiesModule {}
