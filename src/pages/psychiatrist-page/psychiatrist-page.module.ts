import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PsychiatristPage } from './psychiatrist-page';

@NgModule({
  declarations: [
    PsychiatristPage,
  ],
  imports: [
    IonicPageModule.forChild(PsychiatristPage),
  ],
  exports: [
    PsychiatristPage
  ]
})
export class PsychiatristPageModule {}
