import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { JSONService } from './../../providers/json-service';

/**
 * Generated class for the PsychiatristPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-psychiatrist-page',
  templateUrl: 'psychiatrist-page.html',
})
export class PsychiatristPage {

  public psychiatristData: any;
  constructor(public navCtrl: NavController, private callNumber: CallNumber, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {
  this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsychiatristPage');
  }


  getData(){
    this.JSONService.getJsonData('assets/data/psychologe.json').subscribe(
      result => {
        console.log(result);
        this.psychiatristData = result;
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
call(card){
  let number = card.Telefon;
  console.log(number);
  this.callNumber.callNumber(number, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}

}
