import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type BankModel = EntityResourceModel & {
  [USER_RESOURCE_NAME]?: PartialArrayModel<UserModel>;

  externalId: string;

  fingerprint: string;

  isPrimary?: boolean;

  last4: string;

  name: string;
};
