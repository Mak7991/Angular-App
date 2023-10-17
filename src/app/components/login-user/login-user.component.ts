import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSnackBarModule],
})
export class LoginUserComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  loginUserData: User = {
    password: '',
    email: '',
  };
  constructor(private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      (res: any) => {
        console.log('Login successful:', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/todo']);
        // You can perform any additional actions here upon successful registration
      },
      (err:any) => {
        // console.error('Login failed:', );
        // this._snackBar.open(err.statusText, 'Splash', {
        //   horizontalPosition: this.horizontalPosition,
        //   verticalPosition: this.verticalPosition,
        // });
        // You can handle the error or display an appropriate message to the user
        this.openSnackBar(err)
      }
    );
  }

  openSnackBar(err:any) {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
