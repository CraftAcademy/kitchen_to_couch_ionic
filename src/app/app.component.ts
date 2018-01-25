import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Angular2TokenService } from 'angular2-token';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public _tokenService: Angular2TokenService) {

    this._tokenService.init({
        apiBase: "https://kitchen-to-couch.herokuapp.com/api/v1"
      });

    platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
    });
  }
}
