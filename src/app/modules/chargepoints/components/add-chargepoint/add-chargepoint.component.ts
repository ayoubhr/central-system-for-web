import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpsertChargepoint } from '../../interfaces/chargepoint';
import { ChargepointService } from '../../service/chargepoint.service';

@Component({
  selector: 'app-add-chargepoint',
  templateUrl: './add-chargepoint.component.html',
  styleUrls: ['./add-chargepoint.component.scss']
})
export class AddChargepointComponent implements OnInit {

  @ViewChild('saveForm') saveForm!: NgForm;

  upsertChargepoint: UpsertChargepoint = {
    identity: '',
    cpo: ''
  }
  
  constructor(private route: ActivatedRoute, private router: Router, private chargePointService: ChargepointService) { }

  ngOnInit(): void {
    this.upsertChargepoint.cpo = String(this.route.snapshot.paramMap.get('cpo'))
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  saveChargepoint(chp: UpsertChargepoint) {
    this.chargePointService.upsert(chp).subscribe({
      next: () => this.router.navigate(['/chargepoints/list'])
    })
  }
}
