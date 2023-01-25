import { IOrganization } from "../../organizations/interfaces/organization"

export interface IChargepoint {
  id: string
  identity: string
  cpo: any
  entity?: string
}

export type UpsertChargepoint = Pick<IChargepoint, "identity" | "cpo">

export type FindByIdentity = Pick<IChargepoint, "identity">

export type FindByCpo = Pick<IChargepoint, "cpo">

export type FindOneChargepoint = Pick<IChargepoint, "id" | "entity">

export type FindAllChargepoints = Pick<IChargepoint, "entity">

export type DeleteChargepointById = Pick<IChargepoint, "id" | "identity">

export type RemoveChargepoints = IChargepoint[]