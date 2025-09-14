import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type PaymentMethodModel = EntityResourceModel & {
  brand?: string;

  externalId: string;

  fingerprint: string;

  isPrimary?: boolean;

  last4: string;

  name?: string;

  type: PAYMENT_METHOD_TYPE;
};

export enum PAYMENT_METHOD_TYPE {
  BANK = 'bank',
  CARD = 'card',
}
