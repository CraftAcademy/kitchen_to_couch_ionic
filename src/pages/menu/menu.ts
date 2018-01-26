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
  public restaurantsId :any;
  public menu :any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuProvider
  ) {
    if (this.navParams.get('id')) {
      this.restaurantsId = this.navParams.get('id')
    }

    this.menuProvider.all(this.restaurantsId).subscribe(({ data }) => {
      this.menu = data;

    })
  }
}
