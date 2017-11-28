import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//declare var LaunchNavigatorOptions: any;
declare var window;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  destination: string;
  start: string;

  text: string;



  constructor( public navCtrl: NavController) {
    this.start = "";
    this.destination = "Westminster, London, UK";


  }

  navigate(){
    //let options: LaunchNavigatorOptions
  }

    /*async sayText():Promise<any>{
    try{
      await this.tts.speak(this.text);
    }
    catch(e){
      console.log(e);
    }
  }*/

  call(passedNumber){
    window.location = passedNumber;
  }






}


