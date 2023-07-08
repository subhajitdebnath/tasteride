import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userInfo: any;
  productList: any[] = [
    {
      id: 1,
      name: 'Iphone 14'
    },{
      id: 2,
      name: 'Macbook Pro M1'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.userInfo = this.authService.userInfo;
    }

    console.log(this.userInfo);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  login(): void {
    this.router.navigate(['auth']);
  }
}
