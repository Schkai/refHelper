import { JSONService } from './../../providers/json-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

/**
 * Generated class for the BuySomethingElse page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-buy-something-else',
  templateUrl: 'buy-something-else.html',
  providers: [JSONService]
})
export class BuySomethingElse {

  public elseData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService: JSONService, private launchNavigator: LaunchNavigator) {
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


  navigate(card){
    let location = card.Name;
    console.log(location);
    this.launchNavigator.navigate(location);
  }

}
