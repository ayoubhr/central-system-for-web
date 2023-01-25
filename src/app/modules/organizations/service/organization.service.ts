import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  DeleteOrganizationById,
  FindAllOrganizations,
  FindByName,
  FindOneOrganization,
  IOrganization,
  RemoveOrganizations
} from '../interfaces/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private apiEnpoint = 'api/v1/organization'
  private findAllOrgs = 'findAll'
  private findOneOrg = 'findOne'
  private findOrgByName = 'findByName'
  private deleteOrgById = 'deleteById'
  private removeOrgs = 'remove'

  constructor(private http: HttpClient, private router: Router) { }

  findAll(entityType: FindAllOrganizations): Observable<IOrganization[]> {
    return this.http.post<IOrganization[]>(`${this.apiEnpoint}/${this.findAllOrgs}`, entityType)
  }

  findOne(orgInfo: FindOneOrganization): Observable<IOrganization> {
    return this.http.post<IOrganization>(`${this.apiEnpoint}/${this.findOneOrg}`, orgInfo)
  }

  findByName(orgName: FindByName): Observable<IOrganization> {
    return this.http.post<IOrganization>(`${this.apiEnpoint}/${this.findOrgByName}`, orgName)
  }

  deleteById(orgInfo: DeleteOrganizationById): Observable<void> {
    return this.http.delete<void>(`${this.apiEnpoint}/${this.deleteOrgById}`, { body: orgInfo })
  }

  remove(orgs: RemoveOrganizations): Observable<IOrganization[]> {
    return this.http.delete<IOrganization[]>(`${this.apiEnpoint}/${this.removeOrgs}`, { body: orgs })
  }
}
