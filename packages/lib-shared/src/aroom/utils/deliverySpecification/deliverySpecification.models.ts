import { type AddressModel } from '@lib/shared/openapi/utils/addressSpecification/addressSpecification.models';

export type DeliverySpecificationModel = {
  dropoff: AddressModel;
  email: string;
  pickup: AddressModel;
  stops?: Array<AddressModel>;
};
