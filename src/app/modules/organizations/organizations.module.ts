import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsListComponent } from './components/organizations-list/organizations-list.component';
import { FilterByNamePipe } from 'src/app/pipes/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrganizationsListComponent,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    FormsModule
  ]
})
export class OrganizationsModule { }
