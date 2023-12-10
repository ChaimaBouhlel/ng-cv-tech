import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators,} from '@angular/forms';
import {Router} from '@angular/router';
import {UserLogin} from '../models/UserLogin';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  emailInputInFocus = false;
  passwordInputInFocus = false;
  currentUser$: Observable<User | null> | undefined;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  get email(): AbstractControl {
    return this.form.get('email')!;
  }

  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.email, Validators.required],
        asyncValidators: [],
        updateOn: 'change',
      }),
      password: new FormControl(null, {
        validators: [Validators.minLength(4), Validators.required],
        asyncValidators: [],
        updateOn: 'change',
      }),
    });

      this.currentUser$ = this.authenticationService.currentUser$;

  }

  handleSubmit() {
    const userLogin: UserLogin = this.form.value;
    this.authenticationService.login(userLogin).subscribe({
      next: (response) => {
        this.router.navigate(['cv']);
      }
      ,
      error: (error) => {
        this.toastr.error('wrong credentials');
      }
    })
    ;
  }
}
