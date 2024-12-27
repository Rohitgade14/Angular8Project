import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Components/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private loginService: LoginService) {}

  ngOnInit() {
  }
  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful!', response);
        this.loginService.loginSuccess(response);  // Store token on login success
      },
      (error) => {
        console.error('Login failed!', error);
      }
    );
  }
}
