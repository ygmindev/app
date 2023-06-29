import { Card } from '#lib-backend/billing/resources/Card/Card';
import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { LinkedUser } from '#lib-backend/user/resources/LinkedUser/LinkedUser';
import { BANK_RESOURCE_NAME } from '#lib-shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import { CARD_RESOURCE_NAME } from '#lib-shared/billing/resources/Card/Card.constants';
import { type CardModel } from '#lib-shared/billing/resources/Card/Card.models';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { LINKED_USER_RESOURCE_NAME } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withEntity({ indices: [['email'], ['phone']], isRepository: true, name: USER_RESOURCE_NAME })
export class User extends EntityResource implements UserModel {
  @withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true })
  [BANK_RESOURCE_NAME]?: Array<BankModel>;

  @withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true })
  [CARD_RESOURCE_NAME]?: Array<CardModel>;

  @withField({ Resource: LinkedUser, isArray: true, isOptional: true, isRepository: true })
  [LINKED_USER_RESOURCE_NAME]?: Array<LinkedUserModel>;

  @withField({ isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  callingCode?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true, type: FIELD_TYPE.STRING })
  email?: string;

  @withField({ isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  paymentMethodPrimary?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true, type: FIELD_TYPE.STRING })
  phone?: string;

  @withField({ isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  first?: string;

  @withField({ isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  last?: string;
}
