import { type AddressModel } from '@lib/shared/openapi/utils/addressProperty/addressProperty.models';

export type DeliverySpecificationModel = {
  dropoff: AddressModel;
  email: string;
  pickup: AddressModel;
};
