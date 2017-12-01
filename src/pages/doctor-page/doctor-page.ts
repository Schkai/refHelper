import { MidwifeServicePage } from './../midwife-service-page/midwife-service-page';
import { PsychiatristPage } from './../psychiatrist-page/psychiatrist-page';
import { DentistPage } from './../dentist-page/dentist-page';
import { ChildrensDoctor } from './../childrens-doctor/childrens-doctor';
import { Gynecologist } from './../gynecologist/gynecologist';
import { EyeDoctor } from './../eye-doctor/eye-doctor';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralDoctor } from "../general-doctor/general-doctor";


@Component({
  selector: 'page-doctor-page',
  templateUrl: 'doctor-page.html',
})
export class DoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }

  openGeneralDoctorPage(){
    this.navCtrl.push(GeneralDoctor);
  }

  openEyeDoctorPage(){
    this.navCtrl.push(EyeDoctor);
  }

  openGynecologistPage(){
    this.navCtrl.push(Gynecologist);
  }

  openChildrensDoctorPage(){
    this.navCtrl.push(ChildrensDoctor);
  }

  openPsychiatristPage(){
    this.navCtrl.push(PsychiatristPage);
  }

  openDentistPage(){
    this.navCtrl.push(DentistPage);
  }

  openMidWifeServicePage(){
    this.navCtrl.push(MidwifeServicePage);
  }
}
