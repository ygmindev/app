import { Card } from '@lib/backend/billing/resources/Card/Card';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { LinkedUser } from '@lib/backend/user/resources/LinkedUser/LinkedUser';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import type { LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isRepository: true, name: USER_RESOURCE_NAME })
export class User extends EntityResource implements UserModel {
  @withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true })
  [CARD_RESOURCE_NAME]?: Array<CardModel>;

  @withField({ Resource: LinkedUser, isArray: true, isOptional: true, isRepository: true })
  [LINKED_USER_RESOURCE_NAME]?: Array<LinkedUserModel>;

  @withField({ Resource: PaymentMethod, isArray: true, isOptional: true })
  [PAYMENT_METHOD_RESOURCE_NAME]?: Array<PaymentMethodModel>;

  @withField({ isOptional: true, isRepository: true, isUnique: true })
  email?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true })
  phone?: string;

  @withField({ isOptional: true, isRepository: true })
  first?: string;

  @withField({ isOptional: true, isRepository: true })
  last?: string;
}
