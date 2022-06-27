import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Visit } from 'src/app/models/visit';
import { VisitService } from 'src/app/services/visit.service';

declare var iziToast;

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styles: [
  ]
})
export class VisitComponent implements OnInit {

  visits: Visit[] = [];

  visit: any = {
    id: 0,
    comments: '',
    entryDate: '',
    estimatedDate: '',
    exitDate: '',
    status: 0,
    visitor: {
      id: ''
    },
    department: {
      id: ''
    }
  };

  commentPattern: string = '([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]+)';

  inputForm: FormGroup = this._formBuilder.group({
    comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern(this.commentPattern)]]
  })

  constructor(
    private _formBuilder: FormBuilder,
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

  get commentErrorMsg(): string {
    const errors = this.inputForm.get('comment')?.errors;
    if ( errors?.required ) {
      return 'El commentario es obligatorio';
    } else if ( errors?.pattern ) {
      return 'No se aceptan carácteres especiales y números';
    } else if ( errors?.minlength) {
      return 'El commentario es mínimo 10 caracteres';
    } else if ( errors?.maxlength) {
      return 'El commentario es máximo 50 caracteres';
    }
    return '';
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

  inputNoValido( input: string) {
    return this.inputForm.get(input)?.invalid
    && this.inputForm.get(input)?.touched;
  }

  submitFormulario() {
    console.log(this.inputForm.value);
    this.inputForm.markAllAsTouched();
  }

  searchVisit(item:Visit) {
    this.visit = item
    console.log(this.visit);
  }

  changeStatus() {
    // item:Visit
    // this.visit = item;
    // this.visit.status = item.status==1?0:1;
    // this.visit.comments = item.comments;

    this._visitService.changeStatus(this.visit).subscribe({
      next: res=> {
        this.visit.comments = res.comments;
        console.log(this.visit.comments);
        
        this.visit.status = res.status==1?0:1;
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
