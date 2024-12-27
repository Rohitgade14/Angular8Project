
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
   genders =['male','female'];
   signUpForm:FormGroup;
   restrictNames =['Rohit'];

  constructor() { }

    get hobbyControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  ngOnInit() {
    this.signUpForm =new FormGroup({
       'userData': new FormGroup ({
        'username':new FormControl(null,[Validators.required,this.isRestrictedNames.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email],this.isRestrictedEmail),
       }),
         'gender': new FormControl('male'),
         'hobbies': new FormArray([])
    });
     // value changes
    this.signUpForm.valueChanges.subscribe(value =>{
      console.log(value);
      
    })
   // status changes
    this.signUpForm.statusChanges.subscribe(value =>{
      console.log(value);
      
    })
    this.signUpForm.setValue({
      userData:{
        username:'ram',
         email:'ram@gmail.com'
      },
      gender:'male',
       hobbies:[]
    })
    this.signUpForm.patchValue({
      userData:{
        username:'ram',
        // email:'ram@gmail.com'
      },
      gender:'male',
       hobbies:[]
    })
  }
onSubmit(){
  console.log(this.signUpForm);
  // this.signUpForm.reset();
  
}                            //[s:string]:boolean
  isRestrictedNames(control:FormControl):{nameIsRestricted:boolean}{
    if(this.restrictNames.includes(control.value)){
      return{nameIsRestricted:true};
    }
    return null;
  }
  isRestrictedEmail(control: FormControl): Promise<any> | Observable<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'text@gmail.com') {
        resolve({ emailIsRestricted: true });
      } else {
        resolve(null);
      }
    }, 2000);
  });
}


  onAddHobby(){
  const control = new FormControl(null,[Validators.required]);
 (<FormArray>this.signUpForm.get('hobbies')).push(control);
}

}
