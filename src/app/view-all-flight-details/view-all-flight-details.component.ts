import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { FlightDetails } from "../model/flight.component";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-view-all-flight-details",
  templateUrl: "./view-all-flight-details.component.html",
  styleUrls: ["./view-all-flight-details.component.css"],
})
export class ViewAllFlightDetailsComponent implements OnInit {
  flights = null;
  adminId = null;
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.adminId = localStorage.getItem("adminId");
    if (this.adminId == null) {
      this.router.navigate(["/error", "login to continue"]);
    } else {
      this.adminService.viewAllFlight().subscribe(
        (data) => {
          this.flights = data;
        },
        (error) => {
          this.router.navigate(["/error", "some error occured"]);
        }
      );
    }
  }

  removeFlight(flightNo) {
    if (confirm("are you sure you want to delete?")) {
      this.adminService.removeFlight(flightNo).subscribe(
        (data) => {
          this.adminService.viewAllFlight().subscribe(
            (data) => {
              this.flights = data;
            },
            (error) => {
              this.router.navigate(["/error", "some error occured"]);
            }
          );
        },
        (error) => {
          this.router.navigate(["/error", "unable to delete"]);
        }
      );
    }
  }
  updateFlight(flightNo) {
    this.router.navigate(["/updateFlight", flightNo]);
  }
}
