import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = true;

  constructor() { }

  isAuthenticated(): boolean {
    return this.auth;
  }

}
