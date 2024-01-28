import { type AddressModel } from '@lib/shared/openapi/utils/addressSpecification/addressSpecification.models';

export type DeliverySpecificationModel = {
  destination: AddressModel;
  email: string;
  origin: AddressModel;
  stops?: Array<AddressModel>;
};
