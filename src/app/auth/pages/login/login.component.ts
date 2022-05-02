import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUser?: LoginUser;
  username!: string;
  password!: string;
  roles: string[] = [];

  FormLogin: FormGroup = this._fb.group({
    username: ['rbhairava', [Validators.required, Validators.minLength(4)]],
    password: ['12345', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _tokenService: TokenService,
    private _authService: AuthService
  ) { }


  ngOnInit(): void {
    if (this._tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this._tokenService.getAuthorities();
    }
  }

  login() {
    this.loginUser = new LoginUser(this.username, this.password);
    this._authService.login(this.loginUser).subscribe(
      res=> {
        this.isLogged = true;
        this.isLoginFail = false;

        this._tokenService.setToken(res.token!);
        this._tokenService.setUsername(res.username!);
        this._tokenService.setAuthorities(res.authorities!);
        this.roles = res.authorities!;
        console.log(res);
      },
      err=> {
        this.isLogged = false;
        this.isLoginFail = true;
        console.log(err);
      }
    );
  }

}
