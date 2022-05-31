import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/new-user';
import { Visit } from 'src/app/models/visit';
import { AuthService } from 'src/app/services/auth.service';
import { VisitService } from 'src/app/services/visit.service';

declare var iziToast;

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styles: [
  ]
})
export class CreateVisitComponent implements OnInit {

  users: NewUser[] = [];

  visit: any = {
    id: 0,
    name:'',
    dni: '',
    phone: '',
    exitDate: '',
    status: 0,
    user: {
      id: 0
    }
  };

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _visitService: VisitService
  ) {
    this.getUserByRole();
  }

  ngOnInit(): void {
  }

  getUserByRole() : void {
    this._authService.listUsersOwner().subscribe({
      next: res=> {
        this.users = res;       
        console.log(this.users);        
      },
      error: err=> {
        console.log(err);        
      }
    });
  }

  register(registerVisit:any) {
    if (registerVisit.valid) {  
      this._visitService.addVisit(this.visit).subscribe({
        next: res=> {
          iziToast.show({
            title: 'Registrado',
            position: 'topRight',
            color: '#A4E2B2',
            timeout: 3000,
            message: `${res.mensaje}`
          });          
          this._router.navigate(['/dashboard/visit']);
          console.log(res);              
        },
        error: err=> {
          iziToast.show({
            title: 'Error',
            position: 'topRight',
            color: 'red',
            timeout: 3000,
            message: `${err.error.mensaje}`
          });   
          console.log(err);
                 
        }
      });
    }
  }

  // register(registerVisit:any) {
  //   if (registerVisit.valid) {
  //     this._visitService.addVisit(this.visit).subscribe(
  //       res=> {
  //         console.log(res);          
  //         iziToast.show({
  //           title: 'Registrado',
  //           position: 'topRight',
  //           color: '#A4E2B2',
  //           timeout: 3000,
  //           message: 'Se registro el propietario correctamente.'
  //         });
  //         this._router.navigate(['/dashboard/visit']);     
  //       },
  //       err=> {
  //         console.log(err);          
  //       }
  //     );
  //   } else {
  //     iziToast.show({
  //       title: 'Error',
  //       position: 'topRight',
  //       color: 'red',
  //       timeout: 3000,
  //       message: 'Complete todos los datos del formulario.'
  //     });
  //   }
  // }

}
