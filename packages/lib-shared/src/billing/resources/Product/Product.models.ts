import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type ProductModel = EntityResourceModel & {
  name: string;
};

export type ProductFormModel = EntityResourceDataModel<ProductModel>;
