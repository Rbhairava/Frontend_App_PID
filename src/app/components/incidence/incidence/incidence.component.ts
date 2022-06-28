import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/services/incidence.service';

declare var iziToast;

@Component({
  selector: 'app-incidence',
  templateUrl: './incidence.component.html',
  styles: [
  ]
})
export class IncidenceComponent implements OnInit {

  incidences: Incidence[] = [];
  
  incidence: any = {
    id: 0,
    department: {
      id: '',
      name: ''
    }
  }

  constructor(
    private _router: Router,
    private _incidenceService: IncidenceService
  ) { 
    this._incidenceService.listIncidence().subscribe({
      next: res=> {
        this.incidences = res;       
        console.log(this.incidences);        
      },
      error: err=> {
        console.log(err);        
      }
    });
  }

  ngOnInit(): void {
  }

  searchIncidence(item:Incidence) {
    this.incidence = item
    console.log(this.incidence);
  }

  getEstado(status:number):string {
    let salida = "";
    if (status == 1) {
      salida = "Atendido";
    } else {
      salida = "No Atendido";
    }
    return salida == null? "": salida;
  }

  updateProccess() {
    this._incidenceService.getUpdateStateIncidence(this.incidence).subscribe({
      next: res=> {
        iziToast.show({
          title: 'Actualizado',
          position: 'topRight',
          color: '#A4E2B2',
          timeout: 3000,
          message: 'Incidencia Actualizado con éxito'
        });          
        this._router.navigate(['/dashboard/incidence']);
        console.log(res);
      },
      error: err=> {
        console.log(err);        
      }
    });
  }

}
