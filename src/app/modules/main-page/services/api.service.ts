import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IOrganization, UpsertOrganization } from '../../organizations/interfaces/organization';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiEnpoint = 'api/v1/organization'
  private upsertOrg = 'upsert'

  constructor(private http: HttpClient, private router: Router) { }

  upsert(organization: UpsertOrganization): Observable<IOrganization> {
    return this.http.post<IOrganization>(`${this.apiEnpoint}/${this.upsertOrg}`, organization)
  }
}
