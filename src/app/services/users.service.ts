import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  listUsers():Observable<User[]>{
    return this._httpClient.get<User[]>(this.baseURL+"auth/list");
  }
}
