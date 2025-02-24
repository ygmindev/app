import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type PaymentMethodModel = ProtectedResourceModel & {
  externalId: string;

  fingerprint?: string;

  isPrimary?: boolean;

  last4: string;

  name: string;

  type: PaymentMethodTypeModel;
};

export type PaymentMethodFormModel = EntityResourceDataModel<PaymentMethodModel>;

export type PaymentMethodTypeModel = `${PAYMENT_METHOD_TYPE}`;
