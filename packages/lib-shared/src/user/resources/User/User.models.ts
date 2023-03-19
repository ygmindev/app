import type { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import type { BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import type { LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';

export interface UserModel extends EntityResourceModel {
  [BANK_RESOURCE_NAME]?: Array<BankModel>;

  [CARD_RESOURCE_NAME]?: Array<CardModel>;

  [LINKED_USER_RESOURCE_NAME]?: Array<LinkedUserModel>;

  [PAYMENT_METHOD_RESOURCE_NAME]?: Array<PaymentMethodModel>;

  email?: string;

  first?: string;

  last?: string;

  paymentMethodDefault?: string;

  phone?: string;
}

export interface UserFormModel extends EntityResourceDataModel<UserModel> {}
