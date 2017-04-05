import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	// Open side navigation
	openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}

	// Close side navigation
	closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
}
