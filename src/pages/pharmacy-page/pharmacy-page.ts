import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Pharmacy } from './../pharmacy/pharmacy';
import { EmergencyPharmacy } from './../emergency-pharmacy/emergency-pharmacy';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pharmacy-page',
  templateUrl: 'pharmacy-page.html',
})
export class PharmacyPage {

  url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmacyPage');
  }

  openPharmacy(){
    this.navCtrl.push(Pharmacy);
  }

  openEmergencyPharmacy(){
    const options: InAppBrowserOptions = {
      zoom: "no"
    }
    this.url = "https://m.aponet.de/notdienstsuche/93047.html";
    const browser = this.inAppBrowser.create(this.url, "_self", options);
  }

}
