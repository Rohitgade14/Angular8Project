import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from '../../Components/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postForm: FormGroup;
 
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
  }

  onCreatePost() {
    console.log(this.postForm.value); // for priting in the console 
     
    if (this.postForm.valid) {
      this.postService.createPost(this.postForm.value)
        .subscribe(
          (response: any) => {
            console.log('Post Created successfully:', response);
            //  console.log('Status Code:', response.status);
            //  console.log('Response Headers:', response.headers);
            //   console.log('Response Body:', response.body);
            alert('Post created successfully!');
          },
          (error: HttpErrorResponse) => {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
          }
        );
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }
}
