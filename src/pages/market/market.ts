import { JSONService } from './../../providers/json-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

/**
 * Generated class for the Market page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
  providers: [JSONService]
})
export class Market {

  public marktData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService: JSONService, private launchNavigator: LaunchNavigator) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Market');
  }

  getData(){
    this.JSONService.getJsonData('assets/data/maerkte.json').subscribe(
      result => {
        console.log(result);
        this.marktData = result;
      },
      err =>{
      console.error("Error : "+err);
    },
    () => {
      console.log('getData completed')
    }
  );
}

navigate(card){
  let location = card.street + ", " + card.PLZ;
  console.log(location);
  this.launchNavigator.navigate(location);
}

}
