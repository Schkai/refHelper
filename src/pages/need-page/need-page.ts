import { Recreation } from './../recreation/recreation';
import { Authorities } from './../authorities/authorities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyPage } from '../buy-page/buy-page';
import { MedicinPage } from "../medicin-page/medicin-page";
import { SomethingElse } from "../something-else/something-else";

//import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the NeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-need-page',
  templateUrl: 'need-page.html',
})
export class NeedPage {

  //private translate: TranslateService;


  constructor(public navCtrl: NavController, public navParams: NavParams, ) {


  }

  openBuyPage() {
    this.navCtrl.push(BuyPage);
  }

  openMedicinePage() {
    this.navCtrl.push(MedicinPage);
  }

  openElsePage() {
    this.navCtrl.push(SomethingElse);
  }

  openAuthoritiesPage(){
    this.navCtrl.push(Authorities);
  }

  openRecreationPage() {
    this.navCtrl.push(Recreation);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NeedPage');
  }

}
