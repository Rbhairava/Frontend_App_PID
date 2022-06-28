import { HttpClient, HttpParams } from '@angular/common/http';
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

  getListpaymentReceiptParams(dni:string,name:string,typeService:number,status:number): Observable<any> {
    const params = new HttpParams()
      .set("dni", dni)
      .set("name", name)
      .set("typeService", typeService)
      .set("status", status);

    return this._httpClient.get(this.baseURL+"url/paymentReceipt/paymentReceiptByParameters",{params});
  }
}
