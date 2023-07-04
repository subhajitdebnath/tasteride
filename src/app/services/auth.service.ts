import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = true;

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean {
    return this.auth;
  }

  login(payload: any) {
    return this.http.post('https://dummyjson.com/auth/login', payload).pipe(map(response => response));
  }

}
