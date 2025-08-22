import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { type BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { type CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { type PAYMENT_METHOD_RESOURCE_NAME } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type MESSAGE_RESOURCE_NAME } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type UserModel = EntityResourceModel & {
  [ACCESS_RESOURCE_NAME]?: PartialArrayModel<AccessModel>;

  [BANK_RESOURCE_NAME]?: PartialArrayModel<BankModel>;

  [CARD_RESOURCE_NAME]?: PartialArrayModel<CardModel>;

  [CHAT_RESOURCE_NAME]?: PartialArrayModel<ChatModel>;

  [LINKED_USER_RESOURCE_NAME]?: PartialArrayModel<RefModel<LinkedUserModel>>;

  [MESSAGE_RESOURCE_NAME]?: PartialArrayModel<MessageModel>;

  [PAYMENT_METHOD_RESOURCE_NAME]?: PartialArrayModel<PaymentMethodModel>;

  callingCode?: string;

  email?: string;

  first?: string;

  last?: string;

  paymentMethodPrimary?: RefModel<PaymentMethodModel>;

  phone?: string;
};
