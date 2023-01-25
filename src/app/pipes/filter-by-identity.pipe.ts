import { Pipe, PipeTransform } from '@angular/core';
import { IChargepoint } from '../modules/chargepoints/interfaces/chargepoint';

@Pipe({
  name: 'filterByIdentity'
})
export class FilterByIdentityPipe implements PipeTransform {

  transform(chargepoints: IChargepoint[], filterBy: string): IChargepoint[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter
      ? chargepoints.filter((chargepoint) =>
        chargepoint.identity?.toLocaleLowerCase().includes(filter)
      )
      : chargepoints;
  }

}
