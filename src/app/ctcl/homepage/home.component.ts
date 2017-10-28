/* tslint:disable */
import { Component } from '@angular/core';

@Component({
  selector: 'ctcl-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(){
    console.log("I'm home component");
  };

  selectedCities: string[] = [];
  selectedCategories: string[] = ['Technology', 'Sports'];
  checked: boolean = false;
}
