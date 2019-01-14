import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";


@Injectable()
export class UsuarioProvider {

  constructor(public http: Http) {
    console.log('Hello UsuarioProvider Provider');
  }

}
