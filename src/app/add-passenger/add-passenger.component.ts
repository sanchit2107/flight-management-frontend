import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger, PassengerService } from '../service/passenger.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {
  message: string;
  constructor(private passengerService: PassengerService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addpassenger:Passenger):any{
    console.log(addpassenger);
     this.passengerService.addPassenger(addpassenger).subscribe(data => {
      this.message=data});
  }

}
