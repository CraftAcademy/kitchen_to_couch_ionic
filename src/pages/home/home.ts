import { RestaurantsPage } from './../restaurants/restaurants';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestaurantsProvider } from './../../providers/restaurants/restaurants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public restaurants :any;
  public assortments: any[] = [];

  constructor(
    public navCtrl: NavController,
    public restaurantsProvider: RestaurantsProvider
  ) {
    this.restaurantsProvider.all().subscribe(({ data }) => {
      this.restaurants = data;

      data.forEach(({ attributes }) => {
        this.assortments.push({
          name: attributes.assortment,
          imagePath: `assets/imgs/${attributes.assortment.toLowerCase()}.jpg`
        });
      })
    })
  }

  navigateToRestaurantPage(assortmentName: string) {
    let restaurants = this.restaurants.filter(restaurant => {
      if (restaurant.attributes.assortment === assortmentName)
        return restaurant;
    })

    this.navCtrl.push(RestaurantsPage, {
      restaurants: restaurants
    })
  }
}
