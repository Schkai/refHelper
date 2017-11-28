import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportBus } from './transport-bus';

@NgModule({
  declarations: [
    TransportBus,
  ],
  imports: [
    IonicPageModule.forChild(TransportBus),
  ],
  exports: [
    TransportBus
  ]
})
export class TransportBusModule {}
