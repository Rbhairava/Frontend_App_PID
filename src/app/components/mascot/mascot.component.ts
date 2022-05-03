import { Component, OnInit } from '@angular/core';
import { Mascot } from 'src/app/models/mascot';
import { MascotService } from 'src/app/services/mascot.service';

@Component({
  selector: 'app-mascot',
  templateUrl: './mascot.component.html'
})
export class MascotComponent implements OnInit {

  listaMarca:Mascot[]=[];

  constructor(
    private _mascotService: MascotService
  ) { }

  ngOnInit(): void {
  }

}
