import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedPage } from './need-page';

@NgModule({
  declarations: [
    NeedPage,
  ],
  imports: [
    IonicPageModule.forChild(NeedPage),
  ],
  exports: [
    NeedPage
  ]
})
export class NeedPageModule {}
