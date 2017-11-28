import { JSONService } from './../../providers/json-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransportBus } from '../transport-bus/transport-bus';
import { TransportTaxi } from '../transport-taxi/transport-taxi';
import { TransportTrain } from '../transport-train/transport-train';

/**
 * Generated class for the SomethingElse page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-something-else',
  templateUrl: 'something-else.html',
  providers: [JSONService]
})
export class SomethingElse {

  public elseData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService: JSONService) {
    //this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SomethingElse');
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
  /*getData(){
    this.JSONService.getJsonData('assets/data/shopping-centre.json').subscribe(
      result => {
        console.log(result);
        this.elseData = result;
      },
      err =>{
      console.error("Error : "+err);
    },
    () => {
      console.log('getData completed')
    }
  );
}
*/
}
