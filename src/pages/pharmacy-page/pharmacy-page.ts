import { Pharmacy } from './../pharmacy/pharmacy';
import { EmergencyPharmacy } from './../emergency-pharmacy/emergency-pharmacy';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PharmacyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pharmacy-page',
  templateUrl: 'pharmacy-page.html',
})
export class PharmacyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmacyPage');
  }

  openPharmacy(){
    this.navCtrl.push(Pharmacy);
  }

  openEmergencyPharmacy(){
    this.navCtrl.push(EmergencyPharmacy);
  }

}
