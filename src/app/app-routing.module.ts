import { FilterPipesComponent } from './Components/Pipes/filter-pipes/filter-pipes.component';

import { PraticeComponent } from './Components/Forms/pratice/pratice.component';
import { ReactiveFormsComponent } from './Components/Forms/reactive-forms/reactive-forms.component';

import { OneWayBindingComponent } from './Components/Binding/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './Components/Binding/two-way-binding/two-way-binding.component';
import { TemplateFormsComponent } from './Components/Forms/template-forms/template-forms.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './Data/post/post.component';
import { GetComponent } from './Data/get/get.component';
import { LoginComponent } from './Data/login/login.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"template-forms",component:TemplateFormsComponent},
  {path:"reactive-forms",component:ReactiveFormsComponent},
  {path:"one-way-binding",component:OneWayBindingComponent},
  {path:"two-way-binding",component:TwoWayBindingComponent},
  {path:"pratice",component:PraticeComponent},
  {path:"filter-pipes",component:FilterPipesComponent},
  {path:"post",component:PostComponent},
  {path:"get",component:GetComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
