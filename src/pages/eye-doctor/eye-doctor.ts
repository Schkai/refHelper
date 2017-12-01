import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { JSONService } from './../../providers/json-service';

/**
 * Generated class for the EyeDoctor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-eye-doctor',
  templateUrl: 'eye-doctor.html',
})
export class EyeDoctor {

  public eyeDoctorData: any;

  constructor(public navCtrl: NavController,private callNumber: CallNumber, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeDoctor');
  }

  getData(){
    this.JSONService.getJsonData('assets/data/augenarzt.json').subscribe(
      result => {
        console.log(result);
        this.eyeDoctorData = result;
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
