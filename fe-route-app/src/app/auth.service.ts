import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userIsLoggedIn(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  private isAuthenticated = false;
  userRole!: string;

  login(username: string, password: string): boolean{
    // Implement your authentication logic here
    // For simplicity, let's use a hardcoded user
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
 
    //this.userRole = null;
  }
 
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
 
  getUserRole(): string | null {
    return this.userRole;
  }
}


