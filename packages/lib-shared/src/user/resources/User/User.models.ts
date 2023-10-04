import { type ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '#lib-shared/auth/resources/Access/Access.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type UserModel = EntityResourceModel & {
  // [BANK_RESOURCE_NAME]?: Array<BankModel>;

  // [CARD_RESOURCE_NAME]?: Array<CardModel>;

  // [LINKED_USER_RESOURCE_NAME]?: Array<LinkedUserModel>;

  // [PAYMENT_METHOD_RESOURCE_NAME]?: Array<PaymentMethodModel>;

  [ACCESS_RESOURCE_NAME]?: Array<AccessModel>;

  callingCode?: string;

  email?: string;

  first?: string;

  last?: string;

  paymentMethodPrimary?: string;

  phone?: string;
};

export type UserFormModel = EntityResourceDataModel<UserModel>;
