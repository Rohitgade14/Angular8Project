import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {
  appStatus = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Users Data Received')
    },3000);
  })
  filteredString:string='';
  users=[
    {
    name:'Rohit',
    joinedDate: new Date(10,10,2024)
  },
  {
    name:'ram',
    joinedDate: new Date(23,11,2022)
  },
  {
    name:'pratik',
    joinedDate: new Date(17,12,2020)
  }
]


  constructor() { }

  ngOnInit() {
  }
  onAddUser(){
      this.users.push({
        name:'Sample',
        joinedDate: new Date(12,2,2024)
      })
  }
}
