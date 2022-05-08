import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascot } from 'src/app/models/mascot';
import { MascotService } from 'src/app/services/mascot.service';

declare var iziToast;

@Component({
  selector: 'app-create-mascot',
  templateUrl: './create-mascot.component.html',
  styles: [
  ]
})
export class CreateMascotComponent implements OnInit {

  // form!: FormGroup;

  public mascot: Mascot = {
    cod_mascota: 0,
    nom_mascota:'',
    sexo_mascota:'',
    raza_mascota: ''
  };

  constructor(
    private _mascotService: MascotService,
    private _router: Router,
    // private _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  // private buildForm() {
  //   this.form = this._formBuilder.group({
  //     nom_mascota: ['', [Validators.required]],
  //     sexo_mascota: ['', Validators.required],
  //     raza_mascota: ['', [Validators.required]]
  //   });

  //   this.form.valid
  //   this.form.invalid
  // }

  register(registerMascot:any) {
    if (registerMascot.valid) {
      this._mascotService.addMascot(this.mascot).subscribe(
        res=> {
          iziToast.show({
            title: 'Registrado',
            position: 'topRight',
            color: '#A4E2B2',
            timeout: 3000,
            message: 'Se registro la mascota correctamente.'
          });
          this._router.navigate(['/dashboard/mascot']);
        },
        err=> {
          iziToast.show({
            title: 'Error',
            position: 'topRight',
            color: 'red',
            timeout: 3000,
            message: 'No se registró, consulte con el administrador.'
          });
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
