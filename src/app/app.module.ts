import { WomenSportsPage } from './../pages/women-sports/women-sports';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';

import { TransportTaxi } from './../pages/transport-taxi/transport-taxi';
import { TransportBus } from './../pages/transport-bus/transport-bus';
import { Market } from './../pages/market/market';
import { GroceryStore } from './../pages/grocery-store/grocery-store';
import { EmergencyPharmacy } from './../pages/emergency-pharmacy/emergency-pharmacy';
import { Pharmacy } from './../pages/pharmacy/pharmacy';
import { MidwifeServicePage } from './../pages/midwife-service-page/midwife-service-page';
import { PsychiatristPage } from './../pages/psychiatrist-page/psychiatrist-page';
import { DentistPage } from './../pages/dentist-page/dentist-page';
import { ChildrensDoctor } from './../pages/childrens-doctor/childrens-doctor';
import { Gynecologist } from './../pages/gynecologist/gynecologist';
import { EyeDoctor } from './../pages/eye-doctor/eye-doctor';
import { GeneralDoctor } from './../pages/general-doctor/general-doctor';
import { PhoneNumberOverview } from './../pages/phone-number-overview/phone-number-overview';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NeedPage } from '../pages/need-page/need-page';
import { BuyPage } from '../pages/buy-page/buy-page';
import { MedicinPage } from "../pages/medicin-page/medicin-page";
import { FoodSelectorPage } from "../pages/food-selector-page/food-selector-page";
import { HalalFood } from "../pages/halal-food/halal-food";
import { DoctorPage } from "../pages/doctor-page/doctor-page";
import { PharmacyPage } from "../pages/pharmacy-page/pharmacy-page"
import { Hospital } from "../pages/hospital/hospital";
import { Transport } from "../pages/transport/transport";
import { Authorities } from "../pages/authorities/authorities";
import { Recreation } from "../pages/recreation/recreation";
import { Religion } from "../pages/religion/religion";
import { SomethingElse } from "../pages/something-else/something-else";
import { Clothes } from "../pages/clothes/clothes";
import { BuySomethingElse } from "../pages/buy-something-else/buy-something-else";

import { HttpModule, Http } from '@angular/http';
import { JSONService } from "../providers/json-service";
import { TransportTrain } from '../pages/transport-train/transport-train';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from "@ionic-native/call-number";




// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedPage,
    BuyPage,
    MedicinPage,
    FoodSelectorPage,
    HalalFood,
    DoctorPage,
    PharmacyPage,
    Hospital,
    Transport,
    Authorities,
    Recreation,
    Religion,
    Transport,
    SomethingElse,
    Clothes,
    BuySomethingElse,
    PhoneNumberOverview,
    GeneralDoctor,
    EyeDoctor,
    Gynecologist,
    ChildrensDoctor,
    DentistPage,
    PsychiatristPage,
    MidwifeServicePage,
    Pharmacy,
    EmergencyPharmacy,
    GroceryStore,
    Market,
    TransportTaxi,
    TransportBus,
    TransportTrain,
    WomenSportsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedPage,
    BuyPage,
    MedicinPage,
    FoodSelectorPage,
    HalalFood,
    DoctorPage,
    PharmacyPage,
    Hospital,
    Transport,
    Authorities,
    Recreation,
    Religion,
    Transport,
    SomethingElse,
    Clothes,
    BuySomethingElse,
    PhoneNumberOverview,
    GeneralDoctor,
    EyeDoctor,
    Gynecologist,
    ChildrensDoctor,
    DentistPage,
    PsychiatristPage,
    MidwifeServicePage,
    Pharmacy,
    EmergencyPharmacy,
    GroceryStore,
    Market,
    TransportBus,
    TransportTrain,
    TransportTaxi,
    WomenSportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JSONService,
    LaunchNavigator,
    InAppBrowser,
    CallNumber,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
