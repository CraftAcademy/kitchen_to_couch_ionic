//import { restaurantsAssortmentProvider } from './../../providers/restaurants/restaurants';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //public restaurantsAssortment :any;

  constructor(
    public navCtrl: NavController,
    //public restaurantsAssortmentProvider: restaurantsAssortmentProvider
  ) {
    //this.restaurantsAssortmentProvider.all().subscribe( ({data}) => {
    //  this.restaurantsAssortment = data;
    //  console.log(this.restaurantsAssortment);
  }//)
  }
