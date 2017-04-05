import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Electronics } from './electronics';
import { ELECTRONICS_PRODUCTS } from './electronics-mock';

@Injectable()
export class ElectronicsService {

  constructor (
    private http: Http
  ) {}

  getElectrionicsProducts() {
  	return this.http.get(`https://demo4926246.mockable.io/getElectronicsData`)
    .map((res:Response) => res.json());

  	//return Promise.resolve(ELECTRONICS_PRODUCTS);
  }
}
