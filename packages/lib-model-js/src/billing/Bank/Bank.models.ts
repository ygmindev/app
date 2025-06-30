import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type BankModel = EntityResourceModel & {
  externalId: string;

  fingerprint: string;

  isPrimary?: boolean;

  last4: string;

  name: string;

  user?: CollectionModel<UserModel>;
};
