import { Access } from '@lib/backend/auth/resources/Access/Access';
import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { Card } from '@lib/backend/billing/resources/Card/Card';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { Message } from '@lib/backend/chat/resources/Message/Message';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEmbeddedResourceField } from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { LinkedUser } from '@lib/backend/user/resources/LinkedUser/LinkedUser';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { type CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({
  indices: [{ keys: ['first', 'last', 'email', 'phone'], type: 'text' }],
  isDatabase: true,
  name: USER_RESOURCE_NAME,
})
export class User extends EntityResource implements UserModel {
  @withOneToManyField({ Resource: () => Access, mappedBy: USER_RESOURCE_NAME })
  [ACCESS_RESOURCE_NAME]?: Array<RefFieldModel<AccessModel>>;

  @withEmbeddedResourceField({ Resource: () => Bank, mappedBy: USER_RESOURCE_NAME })
  [BANK_RESOURCE_NAME]?: Array<RefFieldModel<BankModel>>;

  @withEmbeddedResourceField({ Resource: () => Card, mappedBy: USER_RESOURCE_NAME })
  [CARD_RESOURCE_NAME]?: Array<RefFieldModel<CardModel>>;

  @withOneToManyField({ Resource: () => Chat, mappedBy: USER_RESOURCE_NAME })
  [CHAT_RESOURCE_NAME]?: Array<RefFieldModel<ChatModel>>;

  @withEmbeddedResourceField({ Resource: () => LinkedUser, mappedBy: USER_RESOURCE_NAME })
  [LINKED_USER_RESOURCE_NAME]?: Array<RefFieldModel<LinkedUserModel>>;

  @withOneToManyField({ Resource: () => Message, mappedBy: USER_RESOURCE_NAME })
  [MESSAGE_RESOURCE_NAME]?: Array<RefFieldModel<MessageModel>>;

  @withOneToManyField({
    Resource: () => PaymentMethod,
    isDatabase: false,
    mappedBy: USER_RESOURCE_NAME,
  })
  [PAYMENT_METHOD_RESOURCE_NAME]?: Array<RefFieldModel<PaymentMethodModel>>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  callingCode?: string;

  @withField({ isDatabase: true, isOptional: true, isUnique: true, type: DATA_TYPE.STRING })
  email?: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  paymentMethodPrimary?: string;

  @withField({ isDatabase: true, isOptional: true, isUnique: true, type: DATA_TYPE.STRING })
  phone?: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  first?: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  last?: string;
}
