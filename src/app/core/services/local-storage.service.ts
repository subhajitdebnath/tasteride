import { Injectable } from '@angular/core';
import { ClickType } from '@swimlane/ngx-datatable';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLSData(key: string, val: any): void {
    let value = JSON.stringify(val);
    localStorage.setItem(key, value);
  }

  getLSData(key: string): any {
    const lsData = localStorage.getItem(key);
    if(lsData) {
      return JSON.parse(lsData)
    }
    return null;
  }

  removeLSData(key: string) {
    localStorage.removeItem(key);
  }
}
