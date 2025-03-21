import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type PaymentMethodModel = EntityResourceModel & {
  [USER_RESOURCE_NAME]?: CollectionModel<UserModel>;

  externalId: string;

  fingerprint?: string;

  isPrimary?: boolean;

  last4: string;

  name: string;

  type: PaymentMethodTypeModel;
};

export type PaymentMethodFormModel = EntityResourceDataModel<PaymentMethodModel>;

export type PaymentMethodTypeModel = `${PAYMENT_METHOD_TYPE}`;
