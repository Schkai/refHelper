import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportTrain } from './transport-train';

@NgModule({
  declarations: [
    TransportTrain,
  ],
  imports: [
    IonicPageModule.forChild(TransportTrain),
  ],
  exports: [
    TransportTrain
  ]
})
export class TransportTrainModule {}
