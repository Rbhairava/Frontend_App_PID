import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/models/owner';
import { Visitor } from 'src/app/models/visitor';
import { OwnerService } from 'src/app/services/owner.service';
import { VisitService } from 'src/app/services/visit.service';
import { VisitorService } from 'src/app/services/visitor.service';

declare var iziToast;

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styles: [
  ]
})
export class CreateVisitComponent implements OnInit {

  listVisitors: Visitor[] = [];
  listOwners: Owner[] = [];

  public visit: any = {
    visitante: { id: '' },
    propietario: { id: '' }
  }

  constructor(
    private _router: Router,
    private _visitService: VisitService,
    private _visitorService: VisitorService,
    private _ownerService: OwnerService
  ) { 
    this._visitorService.listVisitor().subscribe(res => this.listVisitors = res);
    this._ownerService.listOwner().subscribe(res => this.listOwners = res);
  }

  ngOnInit(): void {
  }

  register(registerVisit:any) {
    if (registerVisit.valid) {
      this._visitService.addVisit(this.visit).subscribe(
        res=> {
          console.log(res);          
          iziToast.show({
            title: 'Registrado',
            position: 'topRight',
            color: '#A4E2B2',
            timeout: 3000,
            message: 'Se registro el propietario correctamente.'
          });
          this._router.navigate(['/dashboard/visit']);     
        },
        err=> {
          console.log(err);          
        }
      );
    } else {
      iziToast.show({
        title: 'Error',
        position: 'topRight',
        color: 'red',
        timeout: 3000,
        message: 'Complete todos los datos del formulario.'
      });
    }
  }

}
