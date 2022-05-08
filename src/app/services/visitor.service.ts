import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Visitor } from '../models/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  listVisitor():Observable<Visitor[]>{
    return this._httpClient.get<Visitor[]>(this.baseURL+"url/visitante/list");
  }
}
