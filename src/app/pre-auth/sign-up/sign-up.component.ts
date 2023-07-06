import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  loginSubmitted = false;
  loginSubmitLoader = false;
  cities = [
    "",
    "Bangalore",
    "Bhubaneswar",
    "Kolkata",
    "Delhi",
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required]],
    });
  }

  onSubmit(form: FormGroup): void {
    console.log(form.value);
    Object.values(this.signUpForm.value)
    // this.signUpForm.reset();
    this.loginSubmitted = true;
    // this.userName = form.value.username;
    // this.passWord = form.value.password;
    // this.city = this.city;

    // if(!form.valid) {
    //   return;
    // }
    // console.log(form.value, form.valid);
    // let payload = {
    //   username: 'kminchelle',
    //   password: '0lelplR',
    // }
    // this.authService.login(payload).subscribe(res => {
    //   console.log(res);
    //   this.toastr.success('Login Successful', 'Success!');
    // }, err => {
    //   console.log(err.error.message);
    //   this.toastr.error(err.error.message, 'Error!');
    // })
    // this.defaultState = 'City';
    // console.log(this.defaultState);
    // this.select.reset(this.defaultState);
  }


}
