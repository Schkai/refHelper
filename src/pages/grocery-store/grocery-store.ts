import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { JSONService } from './../../providers/json-service';

/**
 * Generated class for the GroceryStore page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grocery-store',
  templateUrl: 'grocery-store.html',
  providers: [JSONService]
})

export class GroceryStore {

  public groceryData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {

    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroceryStore');
  }

   openMaps(lat, lon){
    let destination = lat + ',' + lon;
	window.open('geo://?q=' + destination, '_system');

   }


    getData(){
    this.JSONService.getJsonData('assets/data/supermarkt.json').subscribe(
      result => {
        console.log(result);
        this.groceryData = result;
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
