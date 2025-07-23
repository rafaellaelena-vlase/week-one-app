import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user_token');
  }

  hasRole(expectedRole: string): boolean {
    const userRole = localStorage.getItem('user_role');
    return this.isAuthenticated() && userRole === expectedRole;
  }
}
