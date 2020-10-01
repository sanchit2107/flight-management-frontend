import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  /*
   *  **********change base url according to your server**************
   */

  private baseUrl = "http://localhost:8086/admin";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  options = { headers: this.httpHeaders };

  adminLogin(admin): Observable<any> {
    console.log(JSON.stringify(admin));
    return this.http.post<any>(`${this.baseUrl}/adminLogin`,JSON.stringify(admin),this.options).pipe(
      catchError(this.errorHandler)
    );
  }

  getAdminDetails(id):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAdmin/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error){
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
