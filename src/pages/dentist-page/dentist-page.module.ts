import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DentistPage } from './dentist-page';

@NgModule({
  declarations: [
    DentistPage,
  ],
  imports: [
    IonicPageModule.forChild(DentistPage),
  ],
  exports: [
    DentistPage
  ]
})
export class DentistPageModule {}
