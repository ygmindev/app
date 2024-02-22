import { Access } from '@lib/backend/auth/resources/Access/Access';
import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { Card } from '@lib/backend/billing/resources/Card/Card';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { Collection } from '@lib/backend/resource/utils/Collection/Collection';
import { withEmbeddedResourceField } from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { LinkedUser } from '@lib/backend/user/resources/LinkedUser/LinkedUser';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { type CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type CollectionModel } from '@lib/shared/resource/utils/Collection/Collection.models';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ indices: [['email'], ['phone']], isRepository: true, name: USER_RESOURCE_NAME })
export class User extends EntityResource implements UserModel {
  @withEmbeddedResourceField({
    Resource: () => Access,
    isRepository: true,
    root: USER_RESOURCE_NAME,
  })
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel> = new Collection(this);

  @withEmbeddedResourceField({ Resource: () => Bank, isRepository: true, root: USER_RESOURCE_NAME })
  [BANK_RESOURCE_NAME]?: Array<BankModel>;

  @withEmbeddedResourceField({ Resource: () => Card, isRepository: true, root: USER_RESOURCE_NAME })
  [CARD_RESOURCE_NAME]?: Array<CardModel>;

  @withEmbeddedResourceField({
    Resource: () => LinkedUser,
    isRepository: true,
    root: USER_RESOURCE_NAME,
  })
  [LINKED_USER_RESOURCE_NAME]?: Array<LinkedUserModel>;

  @withEmbeddedResourceField({ Resource: () => PaymentMethod, root: USER_RESOURCE_NAME })
  [PAYMENT_METHOD_RESOURCE_NAME]?: Array<PaymentMethodModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  callingCode?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true, type: DATA_TYPE.STRING })
  email?: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  paymentMethodPrimary?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true, type: DATA_TYPE.STRING })
  phone?: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  first?: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  last?: string;
}
