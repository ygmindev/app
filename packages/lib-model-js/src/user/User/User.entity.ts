import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { Access } from '@lib/model/auth/Access/Access.entity';
import { AccessModel } from '@lib/model/auth/Access/Access.models';
import { BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { Bank } from '@lib/model/billing/Bank/Bank.entity';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { Card } from '@lib/model/billing/Card/Card.entity';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { PaymentMethod } from '@lib/model/billing/PaymentMethod/PaymentMethod';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import { PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/model/chat/Message/Message.constants';
import { Message } from '@lib/model/chat/Message/Message.entity';
import { MessageModel } from '@lib/model/chat/Message/Message.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import { LinkedUser } from '@lib/model/user/LinkedUser/LinkedUser.entity';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({
  indices: [{ keys: ['first', 'last', 'email', 'phone'], type: 'text' }],
  name: USER_RESOURCE_NAME,
})
export class User extends EntityResource implements UserModel {
  @withOneToManyField({ Resource: () => Access, root: USER_RESOURCE_NAME })
  [ACCESS_RESOURCE_NAME]?: PartialArrayModel<AccessModel>;

  @withManyToManyField({ Resource: () => Bank, root: USER_RESOURCE_NAME })
  [BANK_RESOURCE_NAME]?: PartialArrayModel<BankModel>;

  @withManyToManyField({ Resource: () => Card, root: USER_RESOURCE_NAME })
  [CARD_RESOURCE_NAME]?: PartialArrayModel<CardModel>;

  @withManyToManyField({ Resource: () => Chat, root: 'participants' })
  [CHAT_RESOURCE_NAME]?: PartialArrayModel<ChatModel>;

  @withEmbeddedField({ Resource: () => LinkedUser })
  [LINKED_USER_RESOURCE_NAME]?: PartialArrayModel<LinkedUserModel>;

  @withOneToManyField({ Resource: () => Message, root: 'createdBy' })
  [MESSAGE_RESOURCE_NAME]?: PartialArrayModel<MessageModel>;

  @withManyToManyField({ Resource: () => Card, root: USER_RESOURCE_NAME })
  [PAYMENT_METHOD_RESOURCE_NAME]?: PartialArrayModel<PaymentMethodModel>;

  @withDatabaseField({ isOptional: true })
  callingCode?: string;

  @withDatabaseField({ isOptional: true, isUnique: true })
  email?: string;

  @withDatabaseField({ isOptional: true })
  first?: string;

  @withDatabaseField({ isOptional: true })
  last?: string;

  @withRefField({ Resource: () => PaymentMethod, isDatabase: true, isOptional: true })
  paymentMethodPrimary?: RefModel<PaymentMethodModel>;

  @withDatabaseField({ isOptional: true, isUnique: true })
  phone?: string;
}

export default User;
