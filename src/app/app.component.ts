import { NeedPage } from './../pages/need-page/need-page';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { Settings } from '../providers/providers';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  template: `<ion-menu [content]="content" [swipeEnabled]="false">
    <ion-header>
      <ion-toolbar>
        <ion-title>Languages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let l of languages" (click)="changeLanguage(l)">
          {{l.title}}
        </button>
        <button menuClose ion-item (click)="imprint()">ℹ️</button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {

  //This is the app's entry point
  rootPage = NeedPage;

  @ViewChild(Nav) nav: Nav;

  languages: any[] = [
    { title: 'German 🇩🇪', component: "de" },
    { title: 'English 🇺🇸', component: "en"},
    { title: 'Arabic 🇮🇶', component: "ir"},
    { title: 'French 🇫🇷', component: "fr" },
    { title: 'Dari/Farsi 🇹🇯 🇮🇷 🇦🇫', component: "af" }
  ]

  constructor(private translate: TranslateService, platform: Platform, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      console.log(this.translate.getBrowserLang());
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }
  }

  changeLanguage(language) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(language.component);
    this.translate.use(language.component);
  }

  imprint(){
    let alert = this.alertCtrl.create({
      title: "About this app",
      message: '<b>Translators</b>'+'<br\><br\> Abra Aminpoor (Dari/Farsi), Ronja Bischof/Katrin Wolf (Französisch), Katrin Wolf (Englisch), Aman Yemane (Tigrinya), Marrya Alhanna (Arabisch)'+'<br\><br\>'+
               '<b>Concept</b>'+'<br\><br\> Johannes Dornisch, Andrea Rieder, Katrin Wolf'+'<br\><br\>'+
               '<b>Developers</b>'+'<br\><br\> Sebastian Friedrich, Bernhard Loibl, Maria Hollweck, Konstantin Seitz'+'<br\><br\>'+
               '<b>Graphics</b>'+'<br\><br\> Lissi Knipl-Zörkler, Konstantin Seitz'+'<br\><br\>'+
               '<b>Thanks to</b>'+'<br\><br\> Björn Reschke, Angelika Frey, Sabrina Tanzer'+'<br\><br\>'+
               '<b>Supported by</b>'+'<br\><br\> Das Medienhaus'+'<br\><br\>',
      buttons: ["Ok"]
    });
    alert.present();
  }
}
