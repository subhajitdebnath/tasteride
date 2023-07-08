import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = false;
  userInfo: any;

  constructor(
    private http: HttpClient,
    private lsService: LocalStorageService,
  ) {
    this.getAuthState();
    console.log(this.auth);
  }

  isAuthenticated(): boolean {
    return this.auth;
  }

  getAuthState(): void {
    let authData = this.lsService.getLSData('auth');
    if(authData) {
      this.auth = true;
      this.userInfo = authData;
    } else {
      this.auth = false;
      this.userInfo = null;
    }
  }

  login(payload: any) {
    return this.http.post(environment.serverURL + 'auth/login', payload).pipe(map(response => response));
  }

  logout() {
    this.lsService.removeLSData('auth');
    this.getAuthState();
  }

}
