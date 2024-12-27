
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent implements OnInit {
  gender='male';  
  about=''
@ViewChild('form',{static:false}) signUpForm:NgForm ;
  constructor() { }

  ngOnInit() {
  }
  onFormSubmit() {
    console.log(this.signUpForm.value);
  }
  fillValues(){
    // all values Required
    // this.signUpForm.form.setValue({
    //   userData:{
    //     email:'Rohit14@gmail.com',
    //     username:'RohitPatil'
    //   },
    //   gender:'male',
    //   about:'Software Engineer'
    // }),
    // only particular Requireds
    this.signUpForm.form.patchValue({
      userData:{
        email:'Rohit14@gmail.com',
        username:'RohitPatil'
      },
     
    })

  }
  // onFormSubmit(form:NgForm) {
  //   console.log(form);
  
    
  // }
}
