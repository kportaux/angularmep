import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CustomersService} from './customers/services/customers-service.service';
import {LoginComponent} from './core/login/component/login.component';
import {Loginservice} from './core/login/service/loginservice.service';

import { HttpClientModule } from '@angular/common/http';
import {ListLoginsComponent} from './core/login/component/list-logins.component';
import {RootingModule} from './core/rooting.module';
import {HeaderComponent} from './core/header/header.component';
import {AddLoginComponent} from './core/login/component/add-login.component';
import { CrudCustomersComponent } from './customers/composants/crud-customers.component';
import { ShowusernowDirective } from './shared/directives/showusernow.directive';
import { FiltertabPipe } from './shared/pipe/filtertab.pipe';
import {FooterComponent} from './core/footer/footer/footer.component';
import { UpdateCustomerComponent } from './customers/composants/update-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListLoginsComponent,
    HeaderComponent,
    AddLoginComponent,
    CrudCustomersComponent,
    ShowusernowDirective,
    FiltertabPipe,
    FooterComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Loginservice, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
