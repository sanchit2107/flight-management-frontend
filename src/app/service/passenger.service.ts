import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  updatepassenger: Passenger;
  constructor(private httpService: HttpClient) { }
  public getPassenger() {
    console.log("ins service get passenger");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Passenger>("http://localhost:9000/passenger/passengerdetails");
  }

  public addPassenger(addpassenger: Passenger) {
    console.log("ins service add");
    console.log(addpassenger);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9000/passenger/addPassenger", addpassenger,  { headers, responseType: 'text'});
  }

}
export class Passenger {
  passengerId: number;
  name:string;
  age: number;
  luggage: number;
  
}