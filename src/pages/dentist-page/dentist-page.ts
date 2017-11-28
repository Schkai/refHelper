import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JSONService } from './../../providers/json-service';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@IonicPage()
@Component({
  selector: 'page-dentist-page',
  templateUrl: 'dentist-page.html',
})
export class DentistPage {

  public dentistData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {
  this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DentistPage');
  }
  getData(){
    this.JSONService.getJsonData('assets/data/zahnarzt.json').subscribe(
      result => {
        console.log(result);
        this.dentistData = result;
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
}
