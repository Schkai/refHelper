import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicinPage } from './medicin-page';

@NgModule({
  declarations: [
    MedicinPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicinPage),
  ],
  exports: [
    MedicinPage
  ]
})
export class MedicinPageModule {}
