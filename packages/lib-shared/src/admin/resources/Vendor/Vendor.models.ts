import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  name: string;
};

export type VendorFormModel = EntityResourceDataModel<VendorModel>;
