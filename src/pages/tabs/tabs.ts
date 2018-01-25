import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RestaurantsPage } from '../restaurants/restaurants'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RestaurantsPage;

  constructor() {

  }
}
