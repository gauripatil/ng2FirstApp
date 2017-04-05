import { Component, OnInit } from '@angular/core';

import { Electronics } from './electronics';
import { ElectronicsService } from './electronics.service';

@Component({
  selector: 'electronics-menu',
  templateUrl: './electronics.component.html',
  styleUrls: [ './electronics.component.css' ],
  providers: [ElectronicsService]
})
export class ElectronicsComponent implements OnInit {

  electronicsProducts: Electronics[];

  constructor(private electronicsService: ElectronicsService) { }

  ngOnInit(): void {
    console.log('in init of electronics')
    this.getProducts();
  }

  getProducts(): void {
    /*this.electronicsService.getElectrionicsProducts().then(products => this.electronicsProducts = products);*/

    this.electronicsService.getElectrionicsProducts().subscribe(data => this.electronicsProducts = data);
  }
}
