import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentReceipts } from '../models/payment-receipts';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  createReceipt(reg:PaymentReceipts): Observable<any> {
    return this._httpClient.post<any>(this.baseURL + 'url/paymentReceipt/create', reg);
  }
}
