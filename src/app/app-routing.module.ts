import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ErrorComponent } from "./error/error.component";
import { ShowUserBookingsComponent } from "./show-user-bookings/show-user-bookings.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

const routes: Routes = [
  { path: "", redirectTo: "/userLogin", pathMatch: "full" },
  { path: "userLogin", component: UserLoginComponent },
  { path: "addUser", component: UserRegisterComponent },
  { path: "error/:message", component: ErrorComponent },
  { path: "adminHome", component: AdminHomeComponent },
  { path: "adminLogin", component: AdminLoginComponent },
  { path: "userHome", component: UserHomeComponent },
  { path: "getBookingByUser/:userId", component: ShowUserBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
