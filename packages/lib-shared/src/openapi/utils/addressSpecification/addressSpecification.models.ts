import { type CoordinateModel } from '@lib/shared/map/map.models';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type AddressSpecificationModel = SpecificationModel<AddressModel>;

export type AddressModel = CoordinateModel & {
  address1?: string;
  address2?: string;
  city?: string;
  country?: string;
  name?: string;
  postalCode?: string;
  province?: string;
};
