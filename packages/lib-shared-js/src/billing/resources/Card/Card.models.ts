import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type CARD_FUNDING } from '@lib/shared/billing/resources/Card/Card.constants';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type CardFundingModel = `${CARD_FUNDING}`;

export type CardModel = EntityResourceModel & {
  [USER_RESOURCE_NAME]?: CollectionModel<UserModel>;

  expMonth: number;

  expYear: number;

  externalId: string;

  fingerprint: string;

  funding: CardFundingModel;

  isPrimary?: boolean;

  last4: string;

  name: string;
};
