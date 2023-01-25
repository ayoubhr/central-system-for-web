import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargepointsRoutingModule } from './chargepoints-routing.module';
import { ChargepointsListComponent } from './components/chargepoints-list/chargepoints-list.component';
import { AddChargepointComponent } from './components/add-chargepoint/add-chargepoint.component';
import { FormsModule } from '@angular/forms';
import { FilterByIdentityPipe } from 'src/app/pipes/filter-by-identity.pipe';


@NgModule({
  declarations: [
    ChargepointsListComponent,
    AddChargepointComponent,
    FilterByIdentityPipe
  ],
  imports: [
    CommonModule,
    ChargepointsRoutingModule,
    FormsModule
  ]
})
export class ChargepointsModule { }
