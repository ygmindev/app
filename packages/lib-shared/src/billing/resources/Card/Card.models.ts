import {
  type CARD_BRAND,
  type CARD_FUNDING,
} from '#lib-shared/billing/resources/Card/Card.constants';
import { type PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CardFundingModel = `${CARD_FUNDING}`;

export type CardBrandModel = `${CARD_BRAND}`;

export type CardModel = EmbeddedResourceModel & {
  brand: CardBrandModel;

  expMonth: number;

  expYear: number;

  funding: CardFundingModel;

  id: string;

  last4: string;

  type: PAYMENT_METHOD_TYPE.CARD;
};

export type CardFormModel = EntityResourceDataModel<CardModel>;
