import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{
  form: FormGroup;
  formMode: 'login' | 'register' = 'login'

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', {updateOn: 'blur'}],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  this.updateValidators();
  }

  switchFormMode(formMode: 'login' | 'register'): void {
    this.formMode = formMode;
    this.updateValidators();
  }

  private updateValidators(): void {
    const usernameControl = this.form.get('username');

    if (this.formMode === 'register') {
      usernameControl?.setValidators([Validators.required]);
      usernameControl?.setAsyncValidators(uniqueUsernameValidator());
    } else {
      usernameControl?.clearValidators();
      usernameControl?.clearAsyncValidators();
    }

    usernameControl?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    if (this.formMode === 'login') {
      // console.log("trying to authenticate ", this.form.value);
       if (this.form.get('email')?.invalid || this.form.get('password')?.invalid) {
        console.error("Invalid login credentials");
        this.form.markAllAsTouched();
        return;
       }
    

      const username = this.form.get('username')?.value.toLowerCase();
      let loginSuccess = false;

      if (username === 'admin') {
        localStorage.setItem('user_token', 'fake-admin-token-123');
        localStorage.setItem('user_role', 'admin');
        loginSuccess = true;
      } else if (existingUsernames.includes(username)) {
        localStorage.setItem('user_token', 'fake-user-token-456');
        localStorage.setItem('user_role', 'user');
        loginSuccess = true;
      }

      if (loginSuccess) {
        this.router.navigate(['/profile']);
      } else {
        console.error("Invalid login credentials");
        this.form.get('username')?.setErrors({ invalidLogin: true });
      }

    } else {
      if (this.form.invalid) {
        console.log('invalid register form');
        this.form.markAllAsTouched();
        return;
      }
      console.log("trying to register with", this.form.value);
    }

  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}

const existingUsernames = ['admin', 'ella', 'user'];

function isExistingUsername(username: string): Observable<boolean> {
  return new Observable(observer => {
    setTimeout(() => {
      const isExisting = existingUsernames.includes(username.toLowerCase());
      observer.next(isExisting);
      observer.complete();
    }, 2000);
  });
}

export function uniqueUsernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return isExistingUsername(control.value).pipe(
      map(isExisting => (isExisting ? {usernameTaken: true} : null))
    );
  };
}
