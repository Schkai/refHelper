import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SomethingElse } from './something-else';

@NgModule({
  declarations: [
    SomethingElse,
  ],
  imports: [
    IonicPageModule.forChild(SomethingElse),
  ],
  exports: [
    SomethingElse
  ]
})
export class SomethingElseModule {}
