import type { CARD_TYPE } from '@lib/shared/billing/resources/Card/Card.constants';
import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CardTypeModel = `${CARD_TYPE}`;

export interface CardModel extends EmbeddedResourceModel {
  expMonth: number;

  expYear: number;

  id: string;

  last4: number;

  name: string;

  type?: CardTypeModel;
}

export interface CardFormModel extends EntityResourceDataModel<CardModel> {}
