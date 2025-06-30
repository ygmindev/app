import { type PAYMENT_METHOD_TYPE } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type PaymentMethodModel = EntityResourceModel & {
  externalId: string;

  fingerprint: string;

  isPrimary?: boolean;

  last4: string;

  name: string;

  type: PAYMENT_METHOD_TYPE;
};
