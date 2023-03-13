import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  RealizarConversao(): Observable<any>{
    const apiKey = "xHOGCIdVPklZxNrOSV617tIqnAffZOKfnpSh"
    const url = `https://currencyapi.net/api/v1/rates?key=${apiKey}`

    return this.http.get<any>(url);
  }
}
