import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface CardModel extends EmbeddedResourceModel {
  id: string;
}

export interface CardFormModel extends EntityResourceDataModel<CardModel> {}
