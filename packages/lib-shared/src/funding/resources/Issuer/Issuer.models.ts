import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type IssuerModel = EntityResourceModel & {};

export type IssuerFormModel = EntityResourceDataModel<IssuerModel>;
