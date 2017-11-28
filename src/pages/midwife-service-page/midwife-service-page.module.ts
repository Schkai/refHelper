import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MidwifeServicePage } from './midwife-service-page';

@NgModule({
  declarations: [
    MidwifeServicePage,
  ],
  imports: [
    IonicPageModule.forChild(MidwifeServicePage),
  ],
  exports: [
    MidwifeServicePage
  ]
})
export class MidwifeServicePageModule {}
