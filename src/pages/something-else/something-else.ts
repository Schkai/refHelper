import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { JSONService } from './../../providers/json-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransportBus } from '../transport-bus/transport-bus';
import { TransportTaxi } from '../transport-taxi/transport-taxi';
import { TransportTrain } from '../transport-train/transport-train';

@Component({
  selector: 'page-something-else',
  templateUrl: 'something-else.html',
  providers: [JSONService]
})
export class SomethingElse {

  public elseData: any;
  url: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService: JSONService, private inAppBrowser: InAppBrowser) {
    //this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SomethingElse');
  }

  openBusPage() {
    const options: InAppBrowserOptions = {
      zoom: "no"
    }
    this.url = "https://www.rvv.de";
    const browser = this.inAppBrowser.create(this.url, "_self", options);
  }

  openTaxiPage() {
    const options: InAppBrowserOptions = {
      zoom: "no"
    }
    this.url = "https://www.taxi.de/unternehmen/taxi-regensburg-eg/";
    const browser = this.inAppBrowser.create(this.url, "_self", options);
  }

  openTrainPage() {
    const options: InAppBrowserOptions = {
      zoom: "no"
    }
    this.url = "https://www.bahn.de";
    const browser = this.inAppBrowser.create(this.url, "_self", options);
  }

}
