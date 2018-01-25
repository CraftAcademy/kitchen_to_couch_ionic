import { RestaurantsProvider } from './../../providers/restaurants/restaurants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from './../menu/menu';

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  public restaurants :any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restaurantsProvider: RestaurantsProvider
  ) {
    if (this.navParams.get('restaurants')) {
      this.restaurants = this.navParams.get('restaurants');
    } else {
      this.restaurantsProvider.all().subscribe(({ data }) => {
        this.restaurants = data;
      })
    }
  }
  navigateToMenu() {
    this.navCtrl.push(MenuPage, {
      
    })
    console.log('hello')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
  }
}
