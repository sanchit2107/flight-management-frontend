import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDetails } from '../model/flight.component';
import { FlightDetailsService } from '../services/flight-details.service';

@Component({
  selector: 'app-add-flight-details',
  templateUrl: './add-flight-details.component.html',
  styleUrls: ['./add-flight-details.component.css']
})
export class AddFlightDetailsComponent implements OnInit {

  flight: FlightDetails = new FlightDetails();
  submitted = false;

  constructor(private flightService: FlightDetailsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newFlight(): void {
    this.submitted = false;
    this.flight = new FlightDetails();
  }

  save() {
    this.flightService.addFlight(this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight == new FlightDetails();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/allFlightsDetails']);
  }

}
