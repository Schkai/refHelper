import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuySomethingElse } from './buy-something-else';

@NgModule({
  declarations: [
    BuySomethingElse,
  ],
  imports: [
    IonicPageModule.forChild(BuySomethingElse),
  ],
  exports: [
    BuySomethingElse
  ]
})
export class BuySomethingElseModule {}
