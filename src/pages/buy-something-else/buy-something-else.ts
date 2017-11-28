import { JSONService } from './../../providers/json-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuySomethingElse page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buy-something-else',
  templateUrl: 'buy-something-else.html',
  providers: [JSONService]
})
export class BuySomethingElse {

  public elseData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService: JSONService) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuySomethingElse');
  }

  getData(){
      this.JSONService.getJsonData('assets/data/shopping-centre.json').subscribe(
        result => {
          console.log(result);
          this.elseData = result;
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
