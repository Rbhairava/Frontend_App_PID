import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseURL = environment.baseURL;

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + 'auth/register', newUser);
  }

  public login_admin(loginUser: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.baseURL + 'auth/login', loginUser);
  }
}
