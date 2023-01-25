import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllChargepoints, IChargepoint } from '../../interfaces/chargepoint';
import { ChargepointService } from '../../service/chargepoint.service';

@Component({
  selector: 'app-chargepoints-list',
  templateUrl: './chargepoints-list.component.html',
  styleUrls: ['./chargepoints-list.component.scss']
})
export class ChargepointsListComponent implements OnInit {

  date= new Date()

  searchByIdentity!: string

  chargepoints: IChargepoint[] = []

  entityType: FindAllChargepoints = {
    entity: "Chargepoint"
  }

  constructor(private chargePointService: ChargepointService, private router: Router) { }

  ngOnInit(): void {
    this.chargePointService.findAll(this.entityType).subscribe({
      next: (cs) => this.chargepoints = cs,
      error: (e) => console.log(e) 
    })
  }

  delete(c: IChargepoint) {
    this.chargePointService.deleteById(c).subscribe({
      next: () => {
        this.router.navigate(['organizations/list'])
      },
      error: (e) => console.log(e)
    })
  }
}
