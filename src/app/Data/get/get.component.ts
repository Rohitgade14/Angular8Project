import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Data } from 'src/app/Components/model/data';
import { PostService } from 'src/app/Components/services/post.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  datas: Data[] = [];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    this.postService.getData().subscribe(
      (response:HttpResponse<any>) =>{
      this.datas =response.body;
      console.log(this.datas);
      
    },
    (error) => {
      console.error('Error fetching data', error); 
    }
  );
   }
}
