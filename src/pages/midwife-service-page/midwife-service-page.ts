import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JSONService } from './../../providers/json-service';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-midwife-service-page',
  templateUrl: 'midwife-service-page.html',
})
export class MidwifeServicePage {


  public midwifeData: any;
  constructor(public navCtrl: NavController, private callNumber: CallNumber, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {
  this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MidwifeServicePage');
  }
  getData(){
    this.JSONService.getJsonData('assets/data/hebammen.json').subscribe(
      result => {
        console.log(result);
        this.midwifeData = result;
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
