import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroceryStore } from './grocery-store';

@NgModule({
  declarations: [
    GroceryStore,
  ],
  imports: [
    IonicPageModule.forChild(GroceryStore),
  ],
  exports: [
    GroceryStore
  ]
})
export class GroceryStoreModule {}
