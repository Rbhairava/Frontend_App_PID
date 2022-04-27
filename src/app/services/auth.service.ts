import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  login( username: string, password: string ) {

    const url  = `${ this.baseUrl }/login`
    const body = {username, password};

    return this._http.post(url, body);
  }
}
