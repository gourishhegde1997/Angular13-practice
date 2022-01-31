import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private loginService: LoginServiceService) { }

  userDetails = {
    username : "",
    password : ""
  }

  ngOnInit(): void {
    console.log("ngOnInit() : Log In component initiated...!")
  }

  onSubmit(form : NgForm) {
    console.log("onSubmit() : All form data Submitted...!")
    if (this.loginService.logIn(form.value.userDetails.username, form.value.userDetails.password)) {
      this._snackBar.open('Log In Successful..!', 'close', {duration: 2500});
    } else {
      this._snackBar.open('Failed Log in', 'close', {duration: 2500});
    }
  }

  onClear() {
    console.log("onClear() : All form data cleared...!");
    this.userDetails.username = "";
    this.userDetails.password = "";
  }

}
