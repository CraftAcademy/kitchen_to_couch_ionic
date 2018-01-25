import { MenuProvider } from './../../providers/menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public restaurants :any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
