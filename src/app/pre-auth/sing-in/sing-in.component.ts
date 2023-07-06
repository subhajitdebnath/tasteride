import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {

  signinForm: FormGroup;
  loginSubmitted = false;
  loginSubmitLoader = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private lsService: LocalStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(form: FormGroup): void {
    // console.log(form);
    this.loginSubmitted = true;

    if(!form.valid) {
      return;
    }
    console.log(form.value, form.valid);
    let payload = {
      username: 'kminchelle',
      password: '0lelplR',
    }
    this.authService.login(payload).subscribe(res => {
      console.log(res);
      this.toastr.success('Login Successful', 'Success!');

      // store user auth data into localstorage
      this.lsService.setLSData('auth', res);
      this.authService.getAuthState();
      this.router.navigate(['']);
    }, err => {
      console.log(err.error.message);
      this.toastr.error(err.error.message, 'Error!');
    })
  }
}
