import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  registerUserData: User = {
    email: '',
    password: '',
  };
  constructor(private auth: AuthService, private router: Router) {}
  // registerUser() {
  //   this.auth.registerUser(this.registerUserData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }
  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      (res: any) => {
        console.log('Registration successful:', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/login']);
        // You can perform any additional actions here upon successful registration
      },
      (err) => {
        console.error('Registration failed:', err);
        // You can handle the error or display an appropriate message to the user
      }
    );
  }
}
