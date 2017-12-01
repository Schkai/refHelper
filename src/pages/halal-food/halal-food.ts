import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JSONService } from "../../providers/json-service";
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@IonicPage()
@Component({
  selector: 'page-halal-food',
  templateUrl: 'halal-food.html',
  providers: [JSONService]
})
export class HalalFood {

  public foodData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jsonService:JSONService, private launchNavigator: LaunchNavigator) {

    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HalalFood');
  }

getData(){
  this.jsonService.getJsonData('assets/data/halalFood.json').subscribe(
    result => {
      console.log(result);
      this.foodData = result;
      console.log(this.foodData);
      console.log("Success: "+this.foodData);
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
