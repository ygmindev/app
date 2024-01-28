import { type AddressModel } from '@lib/shared/map/map.models';

export type DeliverySpecificationModel = {
  destination: AddressModel;
  email: string;
  origin: AddressModel;
  stops?: Array<AddressModel>;
};
