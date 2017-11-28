import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  AboutPage
} from "../about/about";
import {
  TranslateService
} from '@ngx-translate/core';

import { NeedPage } from "../need-page/need-page";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;

  private translate: TranslateService;

  constructor(public navCtrl: NavController, translate: TranslateService) {

    this.translate = translate;

    //translate.addLangs(["en", "de"]);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    console.log("set language to english")
    console.log(translate.getLangs());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');

  }

  openEnglishPages() {
    this.translate.use('en')
    this.navCtrl.push(NeedPage);
  }

  openAfghanPages() {
    this.translate.use('af');
    this.navCtrl.push(NeedPage);
  }

  openSyriaPages() {
    this.translate.use('ar');
    this.navCtrl.push(NeedPage);
  }

  openIrakPages() {
    //Sorani/Kurmanji folgt
    this.translate.use('ar')

    this.navCtrl.push(NeedPage);
  }

  openFrenchPages() {
    this.translate.use('fr');
    this .navCtrl.push(NeedPage);
  }


}
