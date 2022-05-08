import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mascot } from '../models/mascot';

@Injectable({
  providedIn: 'root'
})
export class MascotService {

  baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  listMascot():Observable<Mascot[]>{
    return this._httpClient.get<Mascot[]>(this.baseURL+"url/mascota/list");
  }

  addMascot(reg:Mascot): Observable<any> {
    return this._httpClient.post<any>(this.baseURL + 'url/mascota/create', reg);
  }
}
