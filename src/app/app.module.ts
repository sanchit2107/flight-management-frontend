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

@NgModule({
  declarations: [AppComponent, UserRegisterComponent, UserLoginComponent, ErrorComponent, AddFlightDetailsComponent, ViewAllFlightDetailsComponent],
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
