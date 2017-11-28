import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportTaxi } from './transport-taxi';

@NgModule({
  declarations: [
    TransportTaxi,
  ],
  imports: [
    IonicPageModule.forChild(TransportTaxi),
  ],
  exports: [
    TransportTaxi
  ]
})
export class TransportTaxiModule {}
