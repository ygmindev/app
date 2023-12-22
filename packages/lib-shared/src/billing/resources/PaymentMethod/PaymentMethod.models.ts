import { type PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type PaymentMethodModel = EmbeddedResourceModel & {
  [USER_RESOURCE_NAME]: UserModel;

  last4: string;

  type: PaymentMethodTypeModel;
};

// export type PaymentMethodModel = BankModel | CardModel;

export type PaymentMethodTypeModel = `${PAYMENT_METHOD_TYPE}`;
