import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JSONService } from './../../providers/json-service';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@IonicPage()
@Component({
  selector: 'page-gynecologist',
  templateUrl: 'gynecologist.html',
})
export class Gynecologist {

  public gynecologistData: any;

  constructor(public navCtrl: NavController, private callNumber: CallNumber, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {
  this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gynecologist');
  }

  getData(){
    this.JSONService.getJsonData('assets/data/gynacologist.json').subscribe(
      result => {
        console.log(result);
        this.gynecologistData = result;
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
