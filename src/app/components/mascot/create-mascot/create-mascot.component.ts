import { Component, OnInit } from '@angular/core';
import { Mascot } from 'src/app/models/mascot';
import { MascotService } from 'src/app/services/mascot.service';

@Component({
  selector: 'app-create-mascot',
  templateUrl: './create-mascot.component.html',
  styles: [
  ]
})
export class CreateMascotComponent implements OnInit {

  // form!: FormGroup;

  public mascot: any = {
    cod_mascota: 0,
    nom_mascota:'',
    sexo_mascota:'',
    raza_mascota: ''
  };

  constructor(
    // private _formBuilder: FormBuilder,
    private _mascotService: MascotService
  ) { }

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

  register() {
    // event.preventDefault();
    // const value = this.form.value;
    console.log(this.mascot);

    this._mascotService.addMascot(this.mascot).subscribe(
      res=> {
        alert('Se registró correctamente.');
      },
      err=> {
        alert('Error al insertar');
      }
    );
  }

}
