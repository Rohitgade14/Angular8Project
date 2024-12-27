import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
 
  user ={
     name:'',
     email:'',
     password:''
  };
  @ViewChild('userForm',{static:false}) userForm: NgForm;
  @ViewChild('nameInput',{static:false})  nameInput;
  @ViewChild('emailInput' ,{static:false})  emailInput;
  @ViewChild('passwordInput',{static:false})  passwordInput;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('User Registration:', this.user);
    console.log('Form:', this.userForm);
    console.log('Name Input:', this.nameInput);
    console.log('Email Input:', this.emailInput);
    console.log('Password Input:', this.passwordInput);
  }
}
