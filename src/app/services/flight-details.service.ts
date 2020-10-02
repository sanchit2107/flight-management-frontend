import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {

  private baseUrl = "http://localhost:8086/admin";

  constructor(private http: HttpClient) { }

  addFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addFlightDetails`, flight);
  }

  modifyFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/updateFlightDetails`, flight);
  }

  removeFlight(flightNo: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteFlightDetails/${flightNo}`,
    { responseType: 'text' });
  }

  viewAllFlight(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllFlightDetails`);
  }
}
