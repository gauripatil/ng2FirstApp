import { Component, OnInit } from '@angular/core';

import { PaperStationery } from './paperstationery';
import { PaperStationeryService } from './paper-stationery.service';

@Component({
  selector: 'paper-stationery-menu',
  templateUrl: './paper-stationery.component.html',
  styleUrls: [ './paper-stationery.component.css' ],
  providers: [PaperStationeryService]
})
export class PaperStationeryComponent implements OnInit { 

  ngOnInit(): void {
    console.log('in init of paper-stationery')
    this.getProducts();
  }

  paperStationeryProducts: PaperStationery[];

  constructor(private paperStationeryService: PaperStationeryService) { }

  getProducts(): void {
    /*this.paperStationeryService.getPaperStationeryProducts().then(products => this.paperStationeryProducts = products);*/

    this.paperStationeryService.getPaperStationeryProducts().subscribe(data => this.paperStationeryProducts = data);
  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/