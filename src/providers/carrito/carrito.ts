import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

import { AlertController } from "ionic-angular";

/*
  Generated class for the CarritoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarritoProvider {

  items:any[] = [];

  constructor(public http: Http, private alertCtrl:AlertController) {
    console.log('Hello CarritoProvider Provider');
  }

  //funcio para agregar al carrito de compras un producto que recibe como parametro el producto desde el html de productos
  agregar_carrito( item_parametro:any ){

    console.log('no pasa nada..');
    //aqui se comprueba si el producto ya esta en el carrito igualando el codigo que recibo como parametro, si esta en el carrito logico.. solo concluyo el ciclo con el return

    for (let item of this.items) {
     if (item.codigo == item_parametro.codigo) {

      this.alertCtrl.create({

        title:"El Item Existe",
        subTitle: item_parametro.producto+", ya esta en el carrito de compras",
        buttons:["Aceptar"]

      }).present();

      return;
     }
    }

    //aqui si el item no esta en el carrito entonces se agrega al carrito

    this.items.push( item_parametro );
  }

}
