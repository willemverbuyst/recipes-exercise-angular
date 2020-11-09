import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.isLoading = false;
      //...
    } else
      this.authService.signup(email, password).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.isLoading = false;
          this.error = errorMessage;
        }
      );

    form.reset();
  }
}
