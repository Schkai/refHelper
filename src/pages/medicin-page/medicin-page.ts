import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorPage } from "../doctor-page/doctor-page";
import { PharmacyPage } from "../pharmacy-page/pharmacy-page";
import { Hospital } from "../hospital/hospital";

/**
 * Generated class for the BuyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'medicin-page',
  templateUrl: 'medicin-page.html',
})
export class MedicinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinPage');
  }

  openDoctorPage() {
    this.navCtrl.push(DoctorPage);
  }

  openHospitalPage() {
    this.navCtrl.push(Hospital);
  }

  openPharmacyPage() {
    this.navCtrl.push(PharmacyPage);
  }

}
