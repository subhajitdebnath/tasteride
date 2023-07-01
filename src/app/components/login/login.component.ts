import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    console.log('ngOnInit Login');

    setTimeout(()=> {
      console.log('time after 5 sec');
      this.router.navigate(['dashboard']);
    }, 5000)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Login');
  }
}
