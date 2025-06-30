import { type PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type PaymentMethodModel = EntityResourceModel & {
  externalId: string;

  fingerprint: string;

  isPrimary?: boolean;

  last4: string;

  name: string;

  type: PaymentMethodTypeModel;
};

export type PaymentMethodTypeModel = `${PAYMENT_METHOD_TYPE}`;
