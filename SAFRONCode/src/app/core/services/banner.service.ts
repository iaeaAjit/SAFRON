import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
import { Banner } from '../../modules/banner/banner';
     
@Injectable({
  providedIn: 'root'
})
export class BannerService {
     
  private apiURL = "API_URL";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable {

    return this.httpClient.get(this.apiURL + '/banners/')

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(banner:Banner): Observable {

    return this.httpClient.post(this.apiURL + '/banners/', JSON.stringify(banner), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:number): Observable {

    return this.httpClient.get(this.apiURL + '/banners/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, banner:Banner): Observable {

    return this.httpClient.put(this.apiURL + '/banners/' + id, JSON.stringify(banner), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/banners/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}