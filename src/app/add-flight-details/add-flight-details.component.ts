import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FlightDetails } from "../model/flight.component";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-add-flight-details",
  templateUrl: "./add-flight-details.component.html",
  styleUrls: ["./add-flight-details.component.css"],
})
export class AddFlightDetailsComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  adminId = null;
  
    /*
    * --------form for flight details---------
    *
    * 
    * */



  flightForm = this.formBuilder.group({
    departureAirport: [null, Validators.required],
    arrivalAirport: [null, Validators.required],
    departureDate: [null, [Validators.required,this.departureDateValidator]],
    arrivalDate: [null, [Validators.required]],
    availableSeats: [null,[Validators.required,Validators.max(100),Validators.min(0)]],
    arrivalTime: [null, Validators.required],
    departureTime: [null, Validators.required],
    flightVendor: [null, Validators.required],
    cost: [null, [Validators.required,Validators.min(1),Validators.max(10000)]],
  },{validators:this.arrivalDateValidator});





  ngOnInit(): void {
    this.adminId = localStorage.getItem("adminId");
    if (this.adminId == null){
      this.router.navigate(["/error","login to continue"]);
    } else {
      this.adminId = parseInt(this.adminId);
    }
  }


  /* --------validator method for departure date----
  */


  departureDateValidator(control: AbstractControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    if (inputDate < currentDate) {
      return { dateError: true };
    }
    return null;
  }



  /* ----validator method for arrival date---------- */

  arrivalDateValidator(control: AbstractControl){
    const depDate = control.get('departureDate');
    const arrDate = control.get('arrivalDate');
    if( depDate && arrDate && new Date(depDate.value) > new Date(arrDate.value)){
      return {arrivalDateError : true};
    }
    else {
      return null;
    }
  }


  onSubmit() {
    this.adminService.addFlight(this.flightForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/adminHome"]);
      },
      error => {
        this.router.navigate(["/error","error occured unable to add"]);
      }
    );
  }

  gotoList() {
    this.router.navigate(["/allFlightsDetails"]);
  }
}
