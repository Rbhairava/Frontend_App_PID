import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

declare var $:any;
declare var iziToast;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  isLogged=false;
  newUser: NewUser | undefined;
  name!: string;
  username!: string;
  email!: string;
  password!: string;

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    if(this._tokenService.getToken()){
      this.isLogged=true;
    }
  }

  register(registerForm:any) {
    if (registerForm.valid) {
      this.newUser = new NewUser(this.name, this.username,this.email,this.password);
      this._authService.new(this.newUser).subscribe(
        res=> {
          iziToast.show({
            title: 'Success',
            position: 'bottomRight',
            color: 'blue',
            timeout: 3000,
            message: 'Registro Exitoso'
          });
          this._router.navigate(['/login']);
          console.log(res);
          
        },
        err=> {
          if (err.status == 401) {
            iziToast.show({
              title: 'Error',
              position: 'bottomRight',
              color: 'red',
              timeout: 3000,
              message: `${err.error}`
            });
          }
          if (err.status == 400) {
            iziToast.show({
              title: 'Error',
              position: 'bottomRight',
              color: 'red',
              timeout: 3000,
              message: `${err.error}`
            });
          }
        }
      );

    } else {

      iziToast.show({
        title: 'Error',
        position: 'bottomRight',
        color: 'red',
        timeout: 3000,
        message: 'Complete todos los datos del formulario.'
      });
    }

  }

}
