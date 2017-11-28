import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HALALFOOD } from '../../assets/data/halalFood';
import { JSONService } from "../../providers/json-service";


@IonicPage()
@Component({
  selector: 'page-halal-food',
  templateUrl: 'halal-food.html',
  providers: [JSONService]
})
export class HalalFood {

  public foodData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jsonService:JSONService) {
    
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HalalFood');
    console.log(HALALFOOD);
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

}
