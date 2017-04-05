import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { PaperStationery } from './paperstationery';
import { PAPERSTATIONERY_PRODUCTS } from './paper-stationery-mock';

@Injectable()
export class PaperStationeryService {

  constructor (
    private http: Http
  ) {}

  getPaperStationeryProducts() {
  	
	return this.http.get(`https://demo4926246.mockable.io/getPaperSuppliesData`)
    .map((res:Response) => res.json());
  	//return Promise.resolve(PAPERSTATIONERY_PRODUCTS);
  }
}
