import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/core/models/data.model';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfo: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
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
