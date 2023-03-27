import type { CARD_FUNDING } from '@lib/shared/billing/resources/Card/Card.constants';
import type { PaymentMethodTypeModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CardFundingModel = `${CARD_FUNDING}`;

export interface CardModel extends EmbeddedResourceModel {
  brand: string;

  expMonth: number;

  expYear: number;

  funding: CardFundingModel;

  id: string;

  last4: string;

  type?: PaymentMethodTypeModel;
}

export interface CardFormModel extends EntityResourceDataModel<CardModel> {}
