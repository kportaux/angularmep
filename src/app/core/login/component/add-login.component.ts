import { Component, OnInit } from '@angular/core';
import {Login} from '../model/loginmodel';
import {ServiceGenService} from '../../services/service-gen.service';
import {environment} from '../../../../environments/environment';

const urlPutLogin = environment.urlAPI + 'login';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {
  public newLogin: Login;

  constructor(private genservice: ServiceGenService<Login>) { }

  ngOnInit() {
    this.newLogin = new Login();
  }

  addLogin() {
    this.genservice.postT(this.newLogin, urlPutLogin);
  }

}
