import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-update-flight",
  templateUrl: "./update-flight.component.html",
  styleUrls: ["./update-flight.component.css"],
})
export class UpdateFlightComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  adminId = null;
  flightNumber = null;


  flightForm = this.formBuilder.group(
    {
      departureAirport: [null, Validators.required],
      arrivalAirport: [null, Validators.required],
      departureDate: [null, [Validators.required, this.departureDateValidator]],
      arrivalDate: [null, [Validators.required]],
      availableSeats: [
        null,
        [Validators.required, Validators.max(100), Validators.min(0)],
      ],
      arrivalTime: [null, Validators.required],
      departureTime: [null, Validators.required],
      flightVendor: [null, Validators.required],
      cost: [
        null,
        [Validators.required, Validators.min(1), Validators.max(10000)],
      ],
    },
    { validators: this.arrivalDateValidator }
  );

  ngOnInit(): void {
    this.adminId = localStorage.getItem("adminId");
    if (this.adminId == null) {
      this.router.navigate(["/error", "login to continue"]);
    } else {
      this.adminId = parseInt(this.adminId);
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.flightNumber = parseInt(params.get('flightNumber'));
      });
    }
  }

  departureDateValidator(control: AbstractControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    if (inputDate < currentDate) {
      return { dateError: true };
    }
    return null;
  }

  arrivalDateValidator(control: AbstractControl) {
    const depDate = control.get("departureDate");
    const arrDate = control.get("arrivalDate");
    if (
      depDate &&
      arrDate &&
      new Date(depDate.value) > new Date(arrDate.value)
    ) {
      return { arrivalDateError: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    let data = this.flightForm.value;
    if (this.flightNumber != NaN){
      data.flightNumber = this.flightNumber;
    }
    this.adminService.modifyFlight(data).subscribe(
      data => {
        this.router.navigate(["/adminHome"]);
      }, error => {
        this.router.navigate(["/error","unable to update"]);
      }
    );
  }
}
