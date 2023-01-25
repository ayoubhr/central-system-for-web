import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main-page/main-page.module').then((a) => a.MainPageModule)
  },
  {
    path: 'organizations',
    loadChildren: () => import('./modules/organizations/organizations.module').then((a) => a.OrganizationsModule)
  },
  {
    path: 'chargepoints',
    loadChildren: () => import('./modules/chargepoints/chargepoints.module').then((a) => a.ChargepointsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
