import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { JSONService } from './../../providers/json-service';

/**
 * Generated class for the ChildrensDoctor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-childrens-doctor',
  templateUrl: 'childrens-doctor.html',
})
export class ChildrensDoctor {

  public childrensDoctorData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private JSONService:JSONService, private launchNavigator: LaunchNavigator) {
    this.getData();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrensDoctor');
  }

  getData(){
    this.JSONService.getJsonData('assets/data/kinderarzt.json').subscribe(
      result => {
        console.log(result);
        this.childrensDoctorData = result;
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
