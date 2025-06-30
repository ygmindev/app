import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type PaymentMethodModel = EntityResourceModel & {
  externalId: string;

  fingerprint: string;

  isPrimary?: boolean;

  last4: string;

  name: string;

  type: PAYMENT_METHOD_TYPE;
};

export enum PAYMENT_METHOD_TYPE {
  BANK = 'bank',
  CARD = 'card',
}
