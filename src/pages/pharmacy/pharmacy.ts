import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JSONService } from './../../providers/json-service';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-pharmacy',
  templateUrl: 'pharmacy.html',
})
export class Pharmacy {

  public pharmacyData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {
  this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pharmacy');
  }

  getData(){
    this.JSONService.getJsonData('assets/data/apotheke.json').subscribe(
      result => {
        console.log(result);
        this.pharmacyData = result;
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
