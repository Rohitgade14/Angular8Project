import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {
  counter=0;
  constructor() { }

  ngOnInit() {
  }
  
    name="Rohit12";
    email="rohit@gmail.com";
    pass="Pass@123"

    incrementCounter(){
      this.counter++;
    }
}
