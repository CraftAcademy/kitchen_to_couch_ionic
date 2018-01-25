import { RestaurantsProvider } from './../../providers/restaurants/restaurants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    this.restaurantsProvider.all().subscribe( ({data}) => {
      this.restaurants = data;
      console.log(this.restaurants);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
  }

}
