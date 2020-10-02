import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddFlightDetailsComponent } from "./add-flight-details/add-flight-details.component";
import { AddPassengersComponent } from "./add-passengers/add-passengers.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ErrorComponent } from "./error/error.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ShowUserBookingsComponent } from "./show-user-bookings/show-user-bookings.component";
import { UpdateFlightComponent } from "./update-flight/update-flight.component";
import { UpdatePassengerComponent } from "./update-passenger/update-passenger.component";
import { UpdateUserDetailsComponent } from "./update-user-details/update-user-details.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { ViewAllFlightDetailsComponent } from "./view-all-flight-details/view-all-flight-details.component";
import { ViewUserDetailsComponent } from "./view-user-details/view-user-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/userLogin", pathMatch: "full" },
  { path: "userLogin", component: UserLoginComponent },
  { path: "addUser", component: UserRegisterComponent },
  { path: "error/:message", component: ErrorComponent },
  { path: "addFlightDetails", component: AddFlightDetailsComponent },
  { path: "allFlightsDetails", component: ViewAllFlightDetailsComponent },
  { path: "adminHome", component: AdminHomeComponent },
  { path: "adminLogin", component: AdminLoginComponent },
  { path: "userHome", component: UserHomeComponent },
  { path: "getBookingByUser/:userId", component: ShowUserBookingsComponent },
  { path: "viewUser", component: ViewUserDetailsComponent },
  { path: "updateUser", component: UpdateUserDetailsComponent },
  { path: "updateFlight/:flightNumber", component: UpdateFlightComponent },
  { path: "addPassengers/:flightNumber", component: AddPassengersComponent },
  { path: "updatePassenger/:passengerId", component: UpdatePassengerComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
