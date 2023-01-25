import { Pipe, PipeTransform } from '@angular/core';
import { IOrganization } from '../modules/organizations/interfaces/organization';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(organizations: IOrganization[], filterBy: string): IOrganization[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter
      ? organizations.filter((organization) =>
        organization.name?.toLocaleLowerCase().includes(filter)
      )
      : organizations;
  }

}
