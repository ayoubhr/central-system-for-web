import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChargepointComponent } from './components/add-chargepoint/add-chargepoint.component';
import { ChargepointsListComponent } from './components/chargepoints-list/chargepoints-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ChargepointsListComponent
  },
  {
    path: 'add/:cpo',
    component: AddChargepointComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargepointsRoutingModule { }
