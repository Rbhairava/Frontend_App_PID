import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mascot } from '../models/mascot';

@Injectable({
  providedIn: 'root'
})
export class MascotService {

  authURL = environment.authURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  listar():Observable<Mascot[]>{
    return this._httpClient.get<Mascot[]>(this.authURL+"/list");
  }

  addMascot(reg:Mascot): Observable<any> {
    return this._httpClient.post<any>(this.authURL + 'url/mascota', reg);
  }
}
