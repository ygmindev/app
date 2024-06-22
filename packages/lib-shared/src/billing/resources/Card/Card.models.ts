import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type CARD_FUNDING } from '@lib/shared/billing/resources/Card/Card.constants';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type CardFundingModel = `${CARD_FUNDING}`;

export type CardModel = EmbeddedResourceModel & {
  _user: RefFieldModel<UserModel>;

  expMonth: number;

  expYear: number;

  externalId: string;

  fingerprint?: string;

  funding: CardFundingModel;

  last4: string;

  name: string;

  // type: PAYMENT_METHOD_TYPE.CARD;
};

export type CardFormModel = EntityResourceDataModel<CardModel>;
