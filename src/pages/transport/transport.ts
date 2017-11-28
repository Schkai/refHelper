import { TransportTaxi } from './../transport-taxi/transport-taxi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransportBus } from '../transport-bus/transport-bus';
import { TransportTrain } from '../transport-train/transport-train';

/**
 * Generated class for the Transport page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class Transport {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Transport');
  }

  openBusPage() {
    this.navCtrl.push(TransportBus);
  }

  openTaxiPage() {
    this.navCtrl.push(TransportTaxi);
  }

  openTrainPage() {
    this.navCtrl.push(TransportTrain);
  }

}
