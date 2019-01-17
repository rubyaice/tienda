import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { URL_SERVICIOS } from '../../config/url.servicios'

/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductosProvider {

  pagina:number = 0;
  productos: any[] = [];

  constructor(public http: Http) {
    //console.log('Hello ProductosProvider Provider');
    this.cargar_todos();
  }

  cargar_todos(){

    let ulr = URL_SERVICIOS+"productos/todos/"+this.pagina;
    this.http.get( ulr ).map( resp => resp.json() ).subscribe( data => {

      console.log( data );

      if (data.error) {
        //aqui hay un error un problema mi hermano...

      }else{
        this.productos.push( ...data.productos );
        this.pagina +=1;
      }

    });

  }

}
