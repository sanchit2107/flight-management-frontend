import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent } from './error/error.component';
import { AddFlightDetailsComponent } from './add-flight-details/add-flight-details.component';
import { ViewAllFlightDetailsComponent } from './view-all-flight-details/view-all-flight-details.component';
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ShowUserBookingsComponent } from './show-user-bookings/show-user-bookings.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { AddPassengersComponent } from './add-passengers/add-passengers.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ErrorComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    UserHomeComponent,
    ShowUserBookingsComponent,
    ViewUserDetailsComponent,
    UpdateUserDetailsComponent,
    AddFlightDetailsComponent, 
    ViewAllFlightDetailsComponent, UpdateFlightComponent, AddPassengersComponent, UpdatePassengerComponent, PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
