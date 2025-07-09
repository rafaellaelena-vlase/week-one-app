import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators, FormControl } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
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
      console.log("trying to authenticate ", this.form.value);
    } else {
      console.log("trying to login ", this.form.value);
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
