import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

/*
  Generated class for the CarritoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarritoProvider {

  constructor(public http: Http) {
    console.log('Hello CarritoProvider Provider');
  }

}
