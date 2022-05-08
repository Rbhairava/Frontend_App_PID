import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Visit } from '../models/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  listVisit():Observable<Visit[]>{
    return this._httpClient.get<Visit[]>(this.baseURL+"url/visita/list");
  }

  addVisit(reg:Visit): Observable<any> {
    return this._httpClient.post<any>(this.baseURL + 'url/visita/create', reg);
  }
}
