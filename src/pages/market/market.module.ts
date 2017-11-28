import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Market } from './market';

@NgModule({
  declarations: [
    Market,
  ],
  imports: [
    IonicPageModule.forChild(Market),
  ],
  exports: [
    Market
  ]
})
export class MarketModule {}
