import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { type BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { type CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { type PAYMENT_METHOD_RESOURCE_NAME } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';

export type UserModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel>;

  [BANK_RESOURCE_NAME]?: CollectionModel<BankModel>;

  [CARD_RESOURCE_NAME]?: CollectionModel<CardModel>;

  [LINKED_USER_RESOURCE_NAME]?: CollectionModel<LinkedUserModel>;

  [PAYMENT_METHOD_RESOURCE_NAME]?: CollectionModel<PaymentMethodModel>;

  callingCode?: string;

  // chats?: Array<ChatModel>;

  email?: string;

  first?: string;

  last?: string;

  // messages?: Array<MessageModel>;

  paymentMethodPrimary?: PaymentMethodModel;

  phone?: string;
};
