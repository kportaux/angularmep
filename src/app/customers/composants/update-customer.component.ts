import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer-model';
import {ServiceGenService} from '../../core/services/service-gen.service';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Route} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

const urlCustomer = environment.urlAPI + 'customers';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  // public updateCustomer: Customer;
  public updateCustomerO: Observable<Customer>;

  constructor(private gensCustomerService: ServiceGenService<Customer>,
              private route: ActivatedRoute) {
      }

  ngOnInit() {
    const myid = this.route.snapshot.paramMap.get('id');
    console.error('id: ' + myid);
    if (myid === undefined) {
      return;
    } else {
      // this.getCustomerById(myid);
      this.updateCustomerO = this.getCustomerByIdO(myid);
      console.error('this.updateCustomerO: ' + this.updateCustomerO);
    }
  }

/*  getCustomerById(id: string) {
    return this.gensCustomerService.getListT(urlCustomer)
      .pipe(map(data => data.filter(cust => cust.id === cust.id)
      )).subscribe(
        data => {
          console.log('POST Request is successful ', data);
          this.updateCustomer = data[0];
          console.log(this.updateCustomer);
        },
        error => {
          console.log('Rrror', error);
          this.updateCustomer = null;
        }
      );
  }*/


  getCustomerByIdO(id: string) {
    return this.gensCustomerService.getById(id, urlCustomer);
  }

  updateCustomerF() {
    this.gensCustomerService.putT(this.updateCustomerO, urlCustomer)
      .subscribe(
        data => {
          console.log('PUT Request is successful ', data);
          // faire un navigate
        },
        error => {
          console.log('Rrror', error);
        }
      );
  }
}
