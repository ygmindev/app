import { type CARD_FUNDING } from '@lib/model/billing/Card/Card.constants';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type CardModel = EntityResourceModel & {
  [USER_RESOURCE_NAME]?: PartialArrayModel<UserModel>;

  brand?: string;

  expMonth: number;

  expYear: number;

  externalId: string;

  fingerprint: string;

  funding: CARD_FUNDING;

  isPrimary?: boolean;

  last4: string;

  name?: string;
};
