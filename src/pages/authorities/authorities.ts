import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JSONService } from './../../providers/json-service';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-authorities',
  templateUrl: 'authorities.html',
})
export class Authorities {
  public authorityData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService:JSONService,
     private launchNavigator: LaunchNavigator, private callNumber: CallNumber) {
  this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Authorities');
  }
  getData(){
    this.JSONService.getJsonData('assets/data/behoerde.json').subscribe(
      result => {
        console.log(result);
        this.authorityData = result;
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
