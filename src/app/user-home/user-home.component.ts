import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.css"],
})
export class UserHomeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  flights = null;
  notFound = null;
  found = false;
  userId = null;
  user = null;

  searchForm = this.formBuilder.group({
    arrivalAirport: [null, Validators.required],
    departureAirport: [null, Validators.required],
    date: [null, [Validators.required, this.dateValidator]],
  });

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    console.log(this.userId);
    if (this.userId == null) {
      this.router.navigate(["/error", "not logged in, login to continue"]);
    } else {
      this.userId = parseInt(this.userId);
      this.userService.getUser(this.userId).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          this.router.navigate(["/error", "not logged in, login to continue"]);
        }
      );
    }
  }

  search() {
    console.log(this.searchForm.get("date").value);
    this.userService
      .searchFlight(
        this.searchForm.get("departureAirport").value,
        this.searchForm.get("arrivalAirport").value,
        this.searchForm.get("date").value
      )
      .subscribe(
        (data) => {
          this.flights = data;
          console.log(this.flights);
          if (this.flights) {
            this.notFound = null;
            this.found = true;
          } else {
            this.notFound = "no flight found";
            this.found = false;
          }
        },
        (error) => {
          this.notFound = "no flight found";
          this.found = false;
        }
      );
  }

  dateValidator(control: AbstractControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();

    if (inputDate < currentDate) {
      return { dateError: true };
    }
    return null;
  }

  logout() {
    localStorage.removeItem("userId");
    this.router.navigate(["/userLogin"]);
  }

  getBookings() {
    this.router.navigate(["/getBookingByUser", this.userId]);
  }
}
