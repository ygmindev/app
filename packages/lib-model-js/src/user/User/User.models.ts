import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type UserModel = EntityResourceModel & {
  // [ACCESS_RESOURCE_NAME]?: Array<AccessModel>;

  // [BANK_RESOURCE_NAME]?: Array<BankModel>;

  // [CARD_RESOURCE_NAME]?: Array<CardModel>;

  // [LINKED_USER_RESOURCE_NAME]?: Array<LinkedUserModel>;

  // [PAYMENT_METHOD_RESOURCE_NAME]?: Array<PaymentMethodModel>;

  callingCode?: string;

  // chats?: Array<ChatModel>;

  email?: string;

  first?: string;

  last?: string;

  // messages?: Array<MessageModel>;

  // paymentMethodPrimary?: PaymentMethodModel;

  phone?: string;
};
