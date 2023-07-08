import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get(environment.serverURL + 'products').pipe(map(response => response));
  }

  getProductById(id: string) {
    return this.http.get(environment.serverURL + 'products/' + id).pipe(map(response => response));
  }
}
