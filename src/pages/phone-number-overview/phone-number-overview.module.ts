import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneNumberOverview } from './phone-number-overview';

@NgModule({
  declarations: [
    PhoneNumberOverview,
  ],
  imports: [
    IonicPageModule.forChild(PhoneNumberOverview),
  ],
  exports: [
    PhoneNumberOverview
  ]
})
export class PhoneNumberOverviewModule {}
