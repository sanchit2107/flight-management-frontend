import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router:Router,private adminService:AdminService) { }

  adminId = null;
  adminDetails = null;

  ngOnInit(): void {
    this.adminId = parseInt(localStorage.getItem("adminId"));
    if (this.adminId == null){
      this.router.navigate(["/error","admin not logged in login to continue"]);
    }
    this.adminService.getAdminDetails(this.adminId).subscribe(
      (data) => {
        this.adminDetails = data;
      },
      (error) => {
        this.router.navigate(["/error","invalid admin id provided"]);
      }
    );
  }
}
