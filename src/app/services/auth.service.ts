import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user';
import { RegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }
  
  public register(registerUser: RegisterUser): Observable<any> {
    const url  = `${ this.baseUrl }/auth/register`;

    return this._http.post<any>(url, registerUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    const url  = `${ this.baseUrl }/auth/login`;

    return this._http.post<JwtDto>(url, loginUser);
  }
}
