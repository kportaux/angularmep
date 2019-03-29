import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Login} from '../../core/login/model/loginmodel';
import {Customer} from '../model/customer-model';
import {ServiceGenService} from '../../core/services/service-gen.service';
import {finalize, map} from 'rxjs/operators';

const urlCustomer = environment.urlAPI + 'customers';

@Component({
  selector: 'app-crud-customers',
  templateUrl: './crud-customers.component.html',
  styleUrls: ['./crud-customers.component.css']
})
export class CrudCustomersComponent implements OnInit {
  public ListCustomers: Observable<Customer[]>;
  public newCustomer: Customer;
  public nameFilter: string;

  public updating: boolean;


  constructor(private gensCustomerService: ServiceGenService<Customer>) { }

  ngOnInit() {
    this.updating = false;
    this.getListCustomers();
    this.newCustomer = new Customer();
  }

  getListCustomers() {
    this.ListCustomers = this.gensCustomerService.getListT(urlCustomer);
  }

  deleteCustomer(myId: number) {
    this.gensCustomerService.deleteT(myId, urlCustomer)
      .subscribe(              () => {
          this.getListCustomers();
        }
      );
  }

  addCustomer() {
    this.gensCustomerService.postT2(this.newCustomer, urlCustomer)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
          this.getListCustomers();
        },
        error => {
          console.log('Rrror', error);
        }
      );
  }

  chargeCustomer(customerToUpdate: Customer) {
    this.newCustomer = { ...customerToUpdate};
    this.updating = true;
  }

  updateCustomer() {
    this.gensCustomerService.putT(this.newCustomer, urlCustomer)
      .subscribe(
      data => {
        console.log('PUT Request is successful ', data);
        this.getListCustomers();
        this.newCustomer = new Customer();
        this.updating = false;
      },
      error => {
        console.log('Rrror', error);
      }
    );
  }

  filterOnName() {
    this.ListCustomers = this.gensCustomerService.getListT(urlCustomer)
      .pipe(map(data => data.filter(cust => cust.name.includes(this.nameFilter))
      ));
  }

}
