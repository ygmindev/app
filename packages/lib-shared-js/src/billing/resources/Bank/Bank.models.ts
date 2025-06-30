import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type BankModel = EntityResourceModel & {
  [USER_RESOURCE_NAME]?: CollectionModel<UserModel>;

  externalId: string;

  fingerprint: string;

  isPrimary?: boolean;

  last4: string;

  name: string;
};
