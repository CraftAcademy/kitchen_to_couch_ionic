import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MenuPage } from './../../pages/menu/menu';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class MenuProvider {
private apiURL: string;

  constructor(public _tokenService: Angular2TokenService) {}

  all(restaurantsId): Observable<any> {
    return this._tokenService.get(`/restaurants/${restaurantsId}`)
      .map(res => res.json())
  }
}
