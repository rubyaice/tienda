import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//importando de pipes

import { ImagenPipe } from "../pipes/imagen/imagen";

//importado de los servicios

import { CarritoProvider, UsuarioProvider, ProductosProvider } from "../providers/index.services";

//importe d elas paginas de la app

import { CarritoPage, CategoriasPage, LoginPage, OrdenesDetallePage, OrdenesPage, PorCategoriasPage, ProductoPage, TabsPage } from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    ImagenPipe,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesDetallePage,
    OrdenesPage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesDetallePage,
    OrdenesPage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoProvider,
    ProductosProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
