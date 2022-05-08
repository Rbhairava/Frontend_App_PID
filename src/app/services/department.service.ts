import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  listDepartment():Observable<Department[]>{
    return this._httpClient.get<Department[]>(this.baseURL+"url/departamento/list");
  }

  addDepartment(reg:Department): Observable<any> {
    return this._httpClient.post<any>(this.baseURL + 'url/departamento/create', reg);
  }

}
