import { type PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

// export type PaymentMethodModel = BankModel | CardModel;

// export type PaymentMethodFormModel = BankFormModel | CardFormModel;

export type PaymentMethodModel = EmbeddedResourceModel & {
  [USER_RESOURCE_NAME]: UserModel;

  externalId: string;

  fingerprint?: string;

  last4: string;

  name: string;

  type: PaymentMethodTypeModel;
};

export type PaymentMethodFormModel = EntityResourceDataModel<PaymentMethodModel>;

export type PaymentMethodTypeModel = `${PAYMENT_METHOD_TYPE}`;
