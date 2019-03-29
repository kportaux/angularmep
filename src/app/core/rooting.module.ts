import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutilsComponent } from './outils/components/outils.component';

import {CustomersService} from '../customers/services/customers-service.service';


@NgModule({
  declarations: [
    OutilsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CustomersService
  ]
})
export class RootingModule { }
