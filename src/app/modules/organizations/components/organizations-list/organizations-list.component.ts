import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindByCpo, IChargepoint } from 'src/app/modules/chargepoints/interfaces/chargepoint';
import { ChargepointService } from 'src/app/modules/chargepoints/service/chargepoint.service';
import { StateManagerService } from 'src/app/service/state-manager.service';
import { FindAllOrganizations, IOrganization } from '../../interfaces/organization';
import { OrganizationService } from '../../service/organization.service';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.scss']
})
export class OrganizationsListComponent implements OnInit {

  organizations!: IOrganization[]

  chargepoints!: IChargepoint[]

  entityType: FindAllOrganizations = {
    entity: 'Organization'
  }

  searchByName!: string

  date = new Date()

  cpos = []

  constructor(private organizationService: OrganizationService, private router: Router, private stateManager: StateManagerService, private chargePointService: ChargepointService) { }

  ngOnInit(): void {
    this.organizationService.findAll(this.entityType).subscribe({
      next: (os) => this.organizations = os,
      error: (e) => console.log(e),
    })
  }

  delete(organization: IOrganization) {
    this.organizationService.deleteById(organization).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: (e) => console.log(e)
    })
  }

  update(organization: IOrganization) {
    console.log(organization.id)
    this.stateManager.setOrgToUpdate(organization)
    this.router.navigate([''])
  }

  addChp(cpo: string | undefined) {
    this.router.navigate(['/add', cpo])
  }

  findByCpo(cpo: string | undefined) {
    let cpoData: FindByCpo = {
      cpo: cpo
    }
    this.chargePointService.findByCpo(cpoData).subscribe({
      next: (cs) => this.chargepoints = cs,
      error: (e) => console.log(e)
    })
  }
}
