import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = 'Test Page';
  constructor() { }

  ngOnInit() {
  }

}
