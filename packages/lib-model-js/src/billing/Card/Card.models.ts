import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type CardModel = EntityResourceModel & {
  expMonth: number;

  expYear: number;

  externalId: string;

  fingerprint: string;

  funding: CARD_FUNDING;

  isPrimary?: boolean;

  last4: string;

  name: string;

  user?: CollectionModel<UserModel>;
};

export enum CARD_FUNDING {
  CREDIT = 'credit',

  DEBIT = 'debit',
}
