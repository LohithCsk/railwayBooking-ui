import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from './login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) { }
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onSubmit() {
    // Add your login logic here
    // Example: make API call to verify email and password
    console.log(this.username);
    
    if (this.username && this.password) {
      this.loginService.authenticate(this.username, this.password).subscribe(data => {
        if (data == 1) {

          console.log('Login successful');
          this.router.navigate(['/home']);
        }
        else {
          console.log('Login failed');
        }
      })
      

    }
  }
}
