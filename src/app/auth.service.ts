import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  // sendToken(token: string) {
  //   localStorage.setItem("LoggedInUser", token)
  // }
  getToken() {
    return localStorage.getItem("jwt_token")
  }
  isAuthenticated() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("jwt_token");
    localStorage.clear();
    this.myRoute.navigate(["/auth/login"]);
  }
}