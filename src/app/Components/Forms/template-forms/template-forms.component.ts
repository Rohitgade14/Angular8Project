import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  gender = 'female';
  about='';
  submiited=false;
  user ={
    username :'',
    email : '',
    gender : '',
    about :''
  }
  @ViewChild('form',{ static: false })SubmitForm: NgForm; 
    constructor() { }
    userGroupStatus = {
      data: {
        touched: false, // or some initial value
      },
      Valid: false, // or some initial value
    };
  ngOnInit() {
  }
  onSubmit(){
     this.submiited=true;
     this.user.username =this.SubmitForm.value.userData.username
    this.user.email= this.SubmitForm.value.userData.email
    this.user.gender= this.SubmitForm.value.gender
    this.user.about= this.SubmitForm.value.about
    this.SubmitForm.reset();
  
  }
  fillValues(){
    if (this.SubmitForm) {
    this.SubmitForm.form.setValue({
      userData:{
        username:'rohit12',
        email:'rohit12@gamil.com'
      },
      gender:'male',
      about:'Sofware Engineer'
    })
    
  }
}
}
