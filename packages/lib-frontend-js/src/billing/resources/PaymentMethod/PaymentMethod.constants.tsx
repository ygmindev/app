import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

export const PAYMENT_METHOD_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'brand' },
    { id: 'last4' },
    { id: 'name' },
    { id: 'type' },
    { id: 'externalId' },
  ],
  name: PAYMENT_METHOD_RESOURCE_NAME,
  rootName: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<PaymentMethodModel, UserModel>;
