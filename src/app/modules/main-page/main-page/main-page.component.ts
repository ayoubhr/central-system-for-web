import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrganization, UpdateOrganization, UpsertOrganization } from 'src/app/modules/organizations/interfaces/organization';
import { StateManagerService } from 'src/app/service/state-manager.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  @ViewChild('upsertForm') upsertForm!: NgForm;

  organization: UpsertOrganization = {
    name: '',
    legalEntity: ''
  }

  organizationToUpdate: UpdateOrganization = {}

  savedOrganization: IOrganization = {}

  constructor(private router: Router, private apiService: ApiService, private stateManager: StateManagerService) { }
  
  ngOnDestroy(): void {
    this.stateManager.setOrgToUpdate("")
  }
  
  ngOnInit(): void {
    if(typeof this.stateManager.getOrgToUpdate() != undefined) {
      this.organizationToUpdate = this.stateManager.getOrgToUpdate()
    }
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  saveOrganization(organization: any) {
    this.apiService.upsert(organization).subscribe({
      next: (o) => this.savedOrganization = o,
      error: (e) => console.log(e),
      complete: () => this.router.navigate(['organizations/list'])
    })
  }

  updateOrganization(organization: UpdateOrganization) {
    this.apiService.upsert(organization).subscribe({
      next: (o) => this.router.navigate(['organizations/list'])
    })
  }
}
