import { Market } from './../market/market';
import { GroceryStore } from './../grocery-store/grocery-store';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HalalFood } from "../halal-food/halal-food";

/**
 * Generated class for the FoodSelectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food-selector-page',
  templateUrl: 'food-selector-page.html',
})
export class FoodSelectorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodSelectorPage');
  }

  openHalalFood(){
    this.navCtrl.push(HalalFood);
  }

  openGroceryStorePage(){
    this.navCtrl.push(GroceryStore);
  }

  openMarketPage(){
    this.navCtrl.push(Market);
  }
  

}
