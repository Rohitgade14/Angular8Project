import { ShortenPipe } from './Components/Pipes/filter-pipes/CustomPipe/shorten.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './Components/Forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './Components/Forms/reactive-forms/reactive-forms.component';
import { OneWayBindingComponent } from './Components/Binding/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './Components/Binding/two-way-binding/two-way-binding.component';
import { PraticeComponent } from './Components/Forms/pratice/pratice.component';
import { FilterPipesComponent } from './Components/Pipes/filter-pipes/filter-pipes.component';
import { FilterPipe } from './Components/Pipes/filter-pipes/CustomPipe/filter.pipe';
import { PostComponent } from './Data/post/post.component';
import { GetComponent } from './Data/get/get.component';
import { AuthInterceptorService } from './Components/services/auth-interceptor.service';
import { LoginInterceptorService } from './Components/services/login-interceptor.service';
import { LoginComponent } from './Data/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    PraticeComponent,
    FilterPipesComponent,
    ShortenPipe,
    FilterPipe,
    PostComponent,
    GetComponent,
    LoginComponent,
   
  
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService, // Provide the interceptor service
    multi: true                 // Enable multiple interceptors if needed
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptorService,
    multi: true  // Allow multiple interceptors
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
