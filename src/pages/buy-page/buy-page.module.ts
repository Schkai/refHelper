import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyPage } from './buy-page';

@NgModule({
  declarations: [
    BuyPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyPage),
  ],
  exports: [
    BuyPage
  ]
})
export class BuyPageModule {}
