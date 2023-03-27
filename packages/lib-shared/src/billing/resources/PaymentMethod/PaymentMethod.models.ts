import type { BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export type PaymentMethodModel = CardModel | BankModel;

export type PaymentMethodTypeModel = `${PAYMENT_METHOD_TYPE}`;
