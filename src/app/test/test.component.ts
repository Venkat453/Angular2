import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = 'Test Page';
  selected_country = "Select Country";
  flag: any = "";
  dummy: any;
  countries: any = [
    { 'id': 1, 'name': "India" },
    { 'id': 2, 'name': "USA" },
    { 'id': 3, 'name': "China" },
    { 'id': 4, 'name': "Japan" },
    { 'id': 5, 'name': "Russia" },
    { 'id': 6, 'name': "France" }
  ];

  constructor() { }

  ngOnInit() {

  }
  selectedCountry(country) {
    this.flag = country.name;
    this.selected_country = country.name;
    // this.dummy = Object.keys(this.countries[0]);
    // console.log(this.dummy);
  }

}
