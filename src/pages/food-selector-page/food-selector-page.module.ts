import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodSelectorPage } from './food-selector-page';

@NgModule({
  declarations: [
    FoodSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodSelectorPage),
  ],
  exports: [
    FoodSelectorPage
  ]
})
export class FoodSelectorPageModule {}
