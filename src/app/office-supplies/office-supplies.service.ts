import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


import { OfficeSupplies } from './officesupplies';
import { OFFICE_SUPPLIES_PRODUCTS } from './office-supplies-mock';

@Injectable()
export class OfficeSuppliesService {

  constructor (
	private http: Http
  ) {}

  getOfficeSuppliesProducts() {
  console.log('in ofc supplies service')
    
    return this.http.get(`https://demo4926246.mockable.io/getOfficeSuppliesData`)
    .map((res:Response) => res.json());

    //return Promise.resolve(OFFICE_SUPPLIES_PRODUCTS);
  }
}
