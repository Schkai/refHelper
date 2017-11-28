import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HalalFood } from './halal-food';

@NgModule({
  declarations: [
    HalalFood,
  ],
  imports: [
    IonicPageModule.forChild(HalalFood),
  ],
  exports: [
    HalalFood
  ]
})
export class HalalFoodModule {}
