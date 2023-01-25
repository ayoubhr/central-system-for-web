import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  DeleteChargepointById,
  FindAllChargepoints,
  FindByCpo,
  FindByIdentity,
  FindOneChargepoint,
  IChargepoint,
  RemoveChargepoints,
  UpsertChargepoint
} from '../interfaces/chargepoint';

@Injectable({
  providedIn: 'root'
})
export class ChargepointService {

  private apiEnpoint = 'api/v1/chargepoint'
  private upsertChp = 'upsert'
  private findAllChps = 'findAll'
  private findOneChp = 'findOne'
  private findChpsByIdentity = 'findByIdentity'
  private findChpsByCpo = 'findByCpo'
  private deleteChpById = 'deleteById'
  private removeChps = 'remove'

  constructor(private http: HttpClient, private router: Router) { }

  upsert(chargepoint: UpsertChargepoint): Observable<IChargepoint> {
    return this.http.post<IChargepoint>(`${this.apiEnpoint}/${this.upsertChp}`, chargepoint)
  }

  findAll(entityType: FindAllChargepoints): Observable<IChargepoint[]> {
    return this.http.post<IChargepoint[]>(`${this.apiEnpoint}/${this.findAllChps}`, entityType)
  }

  findOne(chpInfo: FindOneChargepoint): Observable<IChargepoint> {
    return this.http.post<IChargepoint>(`${this.apiEnpoint}/${this.findOneChp}`, chpInfo)
  }

  findByIdentity(chpIdentity: FindByIdentity): Observable<IChargepoint[]> {
    return this.http.post<IChargepoint[]>(`${this.apiEnpoint}/${this.findChpsByIdentity}`, chpIdentity)
  }

  findByCpo(chpCpo: FindByCpo): Observable<IChargepoint[]> {
    return this.http.post<IChargepoint[]>(`${this.apiEnpoint}/${this.findChpsByCpo}`, chpCpo)
  }

  deleteById(chpInfo: DeleteChargepointById): Observable<void> {
    return this.http.delete<void>(`${this.apiEnpoint}/${this.deleteChpById}`, { body: chpInfo })
  }

  remove(chps: RemoveChargepoints): Observable<IChargepoint[]> {
    return this.http.delete<IChargepoint[]>(`${this.apiEnpoint}/${this.removeChps}`, { body: chps })
  }
}
