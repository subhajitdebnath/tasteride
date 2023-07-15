import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/core/models/data.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfo: any;
  keyword: string = '';
  cart: any[] = [];
  cartLength = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.userInfo = this.authService.userInfo;
    }

    this.getCart();
    // console.log(this.userInfo);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  login(): void {
    this.router.navigate(['auth']);
  }

  search(): void {
    // console.log('search', this.keyword)
    // this.router.navigate(['search', this.keyword]);
    this.router.navigateByUrl('/search/' + this.keyword);
  }

  goToHome():void {
    this.router.navigate(['']);
  }

  getCart(): void {
    this.cartService.cart.subscribe(cart => {
      console.log(cart);
      this.cart = cart;
      this.getCartLength();
    });
  }

  getCartLength(): void {
    this.cartLength = this.cart.length; // find out the exact count as homework
  }

  goToCart(): void {
    this.router.navigate(['user', 'cart']);
  }
}
