import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmacyPage } from './pharmacy-page';

@NgModule({
  declarations: [
    PharmacyPage,
  ],
  imports: [
    IonicPageModule.forChild(PharmacyPage),
  ],
  exports: [
    PharmacyPage
  ]
})
export class PharmacyPageModule {}
