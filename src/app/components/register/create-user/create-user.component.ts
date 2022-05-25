import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

declare var iziToast;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: [
  ]
})
export class CreateUserComponent implements OnInit {

  lista = ['admin','owner'];

  newuser: NewUser = {
    name: '',
    username: '',
    email: '',
    password: '',
    dni: '',
    phone: '',
    roles: []
  }

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) { 
  }

  ngOnInit(): void {
  }

  register(registerUser:any) {
    if (registerUser.valid) {
      this._authService.newUser(this.newuser).subscribe({
        next: res=> {
          console.log(res);          
        },
        error: err=> {
          console.log(err);
          
        }
      });
    }
  }

}
