import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectronicsComponent }   from './electronics/electronics.component';
import { OfficeSuppliesComponent }   from './office-supplies/office-supplies.component';
import { PaperStationeryComponent }   from './paper-stationery/paper-stationery.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'electronics',  component: ElectronicsComponent },
  { path: 'office-supplies',  component: OfficeSuppliesComponent },
  { path: 'paper-stationery',  component: PaperStationeryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
