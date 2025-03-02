import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { type BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { type CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { type CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { type PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { type MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';

export type UserModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel>;

  [BANK_RESOURCE_NAME]?: CollectionModel<BankModel>;

  [CARD_RESOURCE_NAME]?: CollectionModel<CardModel>;

  [CHAT_RESOURCE_NAME]?: CollectionModel<ChatModel>;

  [LINKED_USER_RESOURCE_NAME]?: CollectionModel<LinkedUserModel>;

  [MESSAGE_RESOURCE_NAME]?: CollectionModel<MessageModel>;

  [PAYMENT_METHOD_RESOURCE_NAME]?: CollectionModel<PaymentMethodModel>;

  callingCode?: string;

  email?: string;

  first?: string;

  last?: string;

  paymentMethodPrimary?: string;

  phone?: string;
};

export type UserFormModel = EntityResourceDataModel<UserModel>;
