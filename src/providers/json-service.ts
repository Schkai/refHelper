import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JSONService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JSONService {

  constructor(public http: Http) {
    console.log('Hello JSONService Provider');
  }

getJsonData(jsonURL) {
  return this.http.get(jsonURL).map(res => res.json());
}


}