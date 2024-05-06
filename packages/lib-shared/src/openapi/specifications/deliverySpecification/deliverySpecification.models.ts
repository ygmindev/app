import { type AddressModel } from '@lib/shared/map/map.models';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type DeliverySpecificationModel = SpecificationModel<DeliveryModel>;

export type DeliveryModel = {
  from: AddressModel;
  to: AddressModel;
};
