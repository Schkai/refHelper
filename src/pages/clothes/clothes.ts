import { JSONService } from './../../providers/json-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Clothes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-clothes',
  templateUrl: 'clothes.html',
  providers: [JSONService]

})
export class Clothes {

  public clothingData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService:JSONService) {
   
    this.getData();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Clothes');
  }

  getData(){
    this.JSONService.getJsonData('assets/data/clothing.json').subscribe(
      result => {
        console.log(result);
        this.clothingData = result;
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