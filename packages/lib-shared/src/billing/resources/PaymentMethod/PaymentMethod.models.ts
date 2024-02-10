import { type BankFormModel, type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { type CardFormModel, type CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { type PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export type PaymentMethodModel = BankModel | CardModel;

export type PaymentMethodFormModel = BankFormModel | CardFormModel;

export type PaymentMethodTypeModel = `${PAYMENT_METHOD_TYPE}`;
