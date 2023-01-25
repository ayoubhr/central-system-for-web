export interface IOrganization {
  id?: string
  name?: string
  legalEntity?: string
  chargePoints?: []
  entity?: string
}

export type UpsertOrganization = Pick<IOrganization, "name" | "legalEntity">

export type UpdateOrganization = Pick<IOrganization, "id" | "name" | "legalEntity">

export type FindByName = Pick<IOrganization, "name" | "entity">

export type FindOneOrganization = Pick<IOrganization, "id" | "entity">

export type FindAllOrganizations = Pick<IOrganization, "entity">

export type DeleteOrganizationById = Pick<IOrganization, "id" | "name" | "legalEntity">

export type RemoveOrganizations = IOrganization[]