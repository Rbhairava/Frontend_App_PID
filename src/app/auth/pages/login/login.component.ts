import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  FormLogin: FormGroup = this._fb.group({
    username: ['renato', [Validators.required, Validators.minLength(4)]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  login() {
    console.log(this.FormLogin.value);

    this._router.navigateByUrl('/dashboard')    
  }

}
