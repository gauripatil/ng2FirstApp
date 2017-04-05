import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ElectronicsComponent }   from './electronics/electronics.component';
import { OfficeSuppliesComponent }   from './office-supplies/office-supplies.component';
import { PaperStationeryComponent }   from './paper-stationery/paper-stationery.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    ElectronicsComponent,
    OfficeSuppliesComponent,
    PaperStationeryComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
