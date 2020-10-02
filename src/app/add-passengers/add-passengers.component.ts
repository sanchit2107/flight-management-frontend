import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: "app-add-passengers",
  templateUrl: "./add-passengers.component.html",
  styleUrls: ["./add-passengers.component.css"],
})
export class AddPassengersComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}


  userId = null;
  flightNumber = null;

    /* ---passenger form group array---- */

  passengerArrayForm = this.formBuilder.group({
    passengers: this.formBuilder.array([this.addPassengerGroup()]),
  });





  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    if (this.userId == null){
      this.router.navigate(["/error","login to continue..."]);
    } else {
      this.userId = parseInt(this.userId);
      this.route.paramMap.subscribe(
        (params:ParamMap) => {
          this.flightNumber = params.get("flightNumber");
        }
      );
    }
  }

  /* ---method to create dynamic form group----- */

  addPassengerGroup() {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      age: [
        null,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      luggage: [
        null,
        [Validators.required, Validators.min(0), Validators.max(15)],
      ],
    });
  }

  /* --getter for passengers------ */

  get passengerArray() {
    return <FormArray>this.passengerArrayForm.get("passengers");
  }


  /* -----method to add more passengers------ */

  addMorePassengers() {
    this.passengerArray.push(this.addPassengerGroup());
  }

  /* ----method to remove passengers---- */

  removePassenger(index) {
    this.passengerArray.removeAt(index);
  }


  

  submit() {
    if (this.passengerArray.length < 1){
      alert("no data provided");
    } else if(this.flightNumber == null){
      this.router.navigate(["/error","flight not provided"]);
    } else {
      this.flightNumber = parseInt(this.flightNumber);

      this.userService.addBooking(this.flightNumber,this.userId,this.passengerArrayForm.value).subscribe(
        data => {
          this.router.navigate(["/userHome"]);
        },
        error => {
          this.router.navigate(["/error","unable to add booking"]);
        }
      );
    }
  }
}
