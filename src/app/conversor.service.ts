import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  RealizarConversao(): Observable<any>{
    const apiKey = "xHOGCIdVPklZxNrOSV617tIqnAffZOKfnpSh";
    const url = `https://currencyapi.net/api/v1/rates?key=${apiKey}&base=USD`;
    return this.http.get<any>(url);
  }
}
