import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodSelectorPage } from "../food-selector-page/food-selector-page";
import { Clothes } from "../clothes/clothes";
import { BuySomethingElse } from "../buy-something-else/buy-something-else";


@Component({
  selector: 'page-buy-page',
  templateUrl: 'buy-page.html',
})
export class BuyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }

  openFoodSelectorPage(){
    this.navCtrl.push(FoodSelectorPage);
  }

  openClothesPage(){
    this.navCtrl.push(Clothes);
  }

  openBuySomethingElsePage() {
    this.navCtrl.push(BuySomethingElse);
  }



}
