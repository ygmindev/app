import { type PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type BankModel = EmbeddedResourceModel & {
  [USER_RESOURCE_NAME]: UserModel;

  externalId: string;

  fingerprint?: string;

  last4: string;

  name: string;

  type: PAYMENT_METHOD_TYPE.BANK;
};

export type BankFormModel = EntityResourceDataModel<BankModel>;
