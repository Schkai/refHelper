import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WomenSportsPage } from '../women-sports/women-sports';
import { Religion } from '../religion/religion';

/**
 * Generated class for the Recreation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recreation',
  templateUrl: 'recreation.html',
})
export class Recreation {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recreation');
  }

  openWomenSportsPage(){
    this.navCtrl.push(WomenSportsPage);
  }

  openReligionPage() {
    this.navCtrl.push(Religion);
  }

}
