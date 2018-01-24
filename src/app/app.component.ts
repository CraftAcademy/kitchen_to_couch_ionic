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

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _tokenService: Angular2TokenService) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this._tokenService.init({
        apiBase: "https://kitchen-to-couch.herokuapp.com/api/v1"
      });
    });
  }
}
