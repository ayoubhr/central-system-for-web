import { Injectable } from '@angular/core';
import { FindByCpo, IChargepoint } from '../modules/chargepoints/interfaces/chargepoint';
import { ChargepointService } from '../modules/chargepoints/service/chargepoint.service';
import { IOrganization } from '../modules/organizations/interfaces/organization';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  private organizationToUpdate!: IOrganization

  chargepoints!: IChargepoint[]

  constructor() { }

  setOrgToUpdate(org: IOrganization | any) {
    this.organizationToUpdate = org
  }

  getOrgToUpdate() {
    return this.organizationToUpdate
  }
}
