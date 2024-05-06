import { type AddressModel } from '@lib/shared/map/map.models';

export type DeliverySpecificationModel = {
  date?: Date;
  destination: AddressModel;
  origin: AddressModel;
};
