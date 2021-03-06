import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from "../../providers/index.services";

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  producto:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs:CarritoProvider) {

    console.log(this.navParams.get("producto"));

    this.producto = this.navParams.get("producto");

  }

}
