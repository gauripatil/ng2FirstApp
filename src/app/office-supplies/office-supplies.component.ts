import { Component, OnInit } from '@angular/core';


import { OfficeSupplies } from './officesupplies';
import { OfficeSuppliesService } from './office-supplies.service';

@Component({
  selector: 'office-supplies-menu',
  templateUrl: './office-supplies.component.html',
  styleUrls: [ './office-supplies.component.css' ],
  providers: [OfficeSuppliesService]
})
export class OfficeSuppliesComponent implements OnInit { 

  officeSuppliesProducts: OfficeSupplies[];

  constructor(private officeSuppliesService: OfficeSuppliesService) { }

  ngOnInit(): void {
    console.log('in init of office-supplies')
    this.getProducts();
  }

  getProducts(): void {

    this.officeSuppliesService.getOfficeSuppliesProducts().subscribe(data => this.officeSuppliesProducts = data);
    /*this.officeSuppliesService.getOfficeSuppliesProducts().then(products => this.officeSuppliesProducts = products);*/
  }
}