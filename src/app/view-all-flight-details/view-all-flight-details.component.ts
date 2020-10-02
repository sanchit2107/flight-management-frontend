import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightDetails } from '../model/flight.component';
import { FlightDetailsService } from '../services/flight-details.service';

@Component({
  selector: 'app-view-all-flight-details',
  templateUrl: './view-all-flight-details.component.html',
  styleUrls: ['./view-all-flight-details.component.css']
})
export class ViewAllFlightDetailsComponent implements OnInit {

  flights:Observable<FlightDetails[]>;
  constructor(private flightService: FlightDetailsService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData()
  {
    this.flights=this.flightService.viewAllFlight();
  }
  removeFlight(flightNo: number)
  {
    this.flightService.removeFlight(flightNo)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
  }
  flightDetails(flightNo:number)
  {
    this.router.navigate(['flightDetails',flightNo]);
  }
  modifyFlight(flightNo: number)
  {
    this.router.navigate(['updateFlight',flightNo]);
  }

}
