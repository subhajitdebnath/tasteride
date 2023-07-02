import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.auth;
  }

}
