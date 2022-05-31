import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/models/visit';
import { VisitService } from 'src/app/services/visit.service';

declare var iziToast;
@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html'
})
export class VisitComponent implements OnInit {

  visits: Visit[] = [];
  visit: Visit;

  constructor(
    private _visitService: VisitService
  ) {
    this._visitService.listVisit().subscribe({
      next: res=> {
        this.visits = res;       
        console.log(this.visits);
        
      },
      error: err=> {
        console.log(err);        
      }
    });
  }

  ngOnInit(): void {
  }

  getEstado(status:number):string {
    let salida = "";
    if (status == 1) {
      salida = "Salida";
    } else {
      salida = "Entrada";
    }
    return salida == null? "": salida;
  }

  changeStatus(item:Visit) {
    this.visit = item;
    this.visit.status = item.status==1?0:1;

    this._visitService.changeStatus(this.visit).subscribe({
      next: res=> {
        iziToast.show({
          title: 'Estado',
          position: 'topRight',
          color: '#A4E2B2',
          timeout: 3000,
          message: `${res.mensaje}`
        });
        console.log(res);  
      },
      error: err=> {
        console.log(err);        
      }
    });
  }

}
