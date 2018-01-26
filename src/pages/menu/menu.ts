import { MenuProvider } from './../../providers/menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public restaurantsId :any;
  public menus :any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuProvider
  ) {
    if (this.navParams.get('id')) {
      this.restaurantsId = this.navParams.get('id')
    }

    this.menuProvider.all(this.restaurantsId).subscribe(({ data }) => {
      debugger;
      this.menus = data.attributes.menus;

    })
  }
}
