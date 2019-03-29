import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Login} from '../login/model/loginmodel';
import {ServiceGenService} from './service-gen.service';

const urlLogin = 'http://127.0.0.1:3000/login';

@Injectable({
  providedIn: 'root'
})
export class ServiceGenLoginService extends ServiceGenService<Login> {

  getListT(): Observable<Login[]> {
    return super.getListT(urlLogin);
  }
}
