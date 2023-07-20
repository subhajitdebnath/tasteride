import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, filter, interval, map } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  products: any[] = [];

  customObs: Observable<any>;

  private intervalSub: Subscription;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.customObs = Observable.create((observer) => {

      let count = 0;
      setInterval(() => {
        observer.next(count);

        if(count >=4) {
          observer.complete();
        }

        if(count >= 5) {
          observer.error(new Error('count cant be more thn 5'));
        }

        count ++;
      }, 1000)

    })

    this.intervalSub = this.customObs.pipe(filter(data => {
      return data > 0;
    }), map(data => {
      return data *2;
    }))
    .subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: err => console.error(err),
      complete: () => console.log('completed')
    })
    
  }

  ngOnDestroy(): void {
    this.intervalSub?.unsubscribe();
  }

  getProducts(): void {
    this.apiService.getProducts().subscribe({
      next: (res: any) => {
        console.log(res.products);
        this.products = res.products;
      },
      error: err => console.error(err),
    });
  }
}
