import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/login/component/login.component';
import {Loginservice} from './core/login/service/loginservice.service';
import {ListLoginsComponent} from './core/login/component/list-logins.component';
import {AddLoginComponent} from './core/login/component/add-login.component';
import {CrudCustomersComponent} from './customers/composants/crud-customers.component';
import {UpdateCustomerComponent} from './customers/composants/update-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'listlogins',
    canActivate: [Loginservice],
    component: ListLoginsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addLogin',
    component: AddLoginComponent
  },
  {
    path: 'custom',
    component: CrudCustomersComponent
  },
  {
    path: 'customUp/:id',
    component: UpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
