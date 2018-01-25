import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomePage } from '../pages/home/home';
import { RestaurantsPage } from '../pages/restaurants/restaurants'
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestaurantsProvider } from '../providers/restaurants/restaurants';
import { MenuProvider } from '../providers/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RestaurantsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    RouterModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RestaurantsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Angular2TokenService,
    RestaurantsProvider,
    MenuProvider,
  ]
})
export class AppModule {}
