import { Component, OnInit } from '@angular/core';
import {ServiceGenLoginService} from '../../services/service-gen-login.service';
import {Observable} from 'rxjs';
import {Login} from '../model/loginmodel';
import {finalize} from 'rxjs/operators';
import {ServiceGenService} from '../../services/service-gen.service';
import {environment} from '../../../../environments/environment';

const urlLogin = environment.urlAPI + 'login';

@Component({
  selector: 'app-list-logins',
  templateUrl: './list-logins.component.html',
  styleUrls: ['./list-logins.component.css']
})
export class ListLoginsComponent implements OnInit {
  public ListLogins: Observable<Login[]>;
  public isLoaded: boolean;

  constructor(private logingenservice: ServiceGenLoginService,
              private genservice: ServiceGenService<Login>) { }

  ngOnInit() {
    this.getListLogins();
  }

  getListLogins() {
    this.isLoaded = false;
    /* this.ListUsers = this.userservice.getListUsers().
     pipe(finalize( () => this.isLoaded = true)); */
    /* this.ListUsers = this.userGen.getListT().
     pipe(finalize( () => this.isLoaded = true)); */

    this.ListLogins = this.logingenservice.getListT().
    pipe(finalize( () => this.isLoaded = true));

    // this.isLoaded = true;
  }

  deleteLogin(myId: number) {
    this.genservice.deleteT(myId, urlLogin)
      .subscribe(              () => {
         this.getListLogins();
        }
      );
  }

}
