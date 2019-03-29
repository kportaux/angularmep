import { Component, OnInit } from '@angular/core';
import {Loginservice} from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public firstName: string;
  public pass: string;

  constructor(private loginservice: Loginservice) { }

  ngOnInit() {
  }

  validate() {
    // this.userservice.login(this.first_name,this.last_name).subscribe();
    this.loginservice.loginfilter(this.firstName, this.pass);
  }

}
