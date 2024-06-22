import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type BankModel = EmbeddedResourceModel & {
  _user: RefFieldModel<UserModel>;

  externalId: string;

  fingerprint?: string;

  last4: string;

  name: string;

  // type: PAYMENT_METHOD_TYPE.BANK;
};

export type BankFormModel = EntityResourceDataModel<BankModel>;
