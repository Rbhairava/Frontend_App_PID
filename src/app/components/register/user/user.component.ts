import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this._userService.listUsers().subscribe({
      next: res=> {
        this.users = res;       
      },
      error: err=> {
        console.log(err);        
      }
    });
  }

  getEstado(status:number):string {
    let salida = "";
    if (status == 0) {
      salida = "Activo";
    } else if (status == 1) {
      salida = "Inactivo";
    } else {
      salida = "Eliminado";
    }
    return salida == null? "": salida;
  }

}
