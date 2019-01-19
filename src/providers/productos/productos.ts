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

    let promesa = new Promise( ( resolve, reject ) => {

      let ulr = URL_SERVICIOS+"productos/todos/"+this.pagina;
      this.http.get( ulr ).map( resp => resp.json() ).subscribe( data => {

      console.log( data );

      if (data.error) {
        //aqui hay un error un problema mi hermano...

      }else{
        let nuevaData = this.agrupar( data.productos, 2 );


        this.productos.push( ...nuevaData );
        this.pagina +=1;
      }

      resolve();

    });

    });

    return promesa;
  }

  //ceracion de metodo para agrupar arrais de 2 en 2 el cual recibe 2 parametros para si ejecucion

  private agrupar( arr:any, tamano:number ) {
    let nuevoArreglo = [];

    for (let i = 0; i < arr.length; i+=tamano) {
      nuevoArreglo.push( arr.slice(i, i+tamano) );
    }

    console.log(nuevoArreglo);

    return nuevoArreglo;
  }

}
