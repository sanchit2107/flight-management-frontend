import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { ErrorComponent } from "./error/error.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

const routes: Routes = [
  { path: "", redirectTo: "/userLogin", pathMatch: "full" },
  { path: "userLogin", component: UserLoginComponent },
  { path: "addUser", component: UserRegisterComponent },
  { path: "addPassenger", component: AddPassengerComponent },
  { path: "error/:message", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
