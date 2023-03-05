import type { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface PaymentMethodModel extends EmbeddedResourceModel {
  id: string;
  last4: string;
  type: PaymentMethodType;
}

export interface PaymentMethodFormModel extends EntityResourceDataModel<PaymentMethodModel> {}

export type PaymentMethodType = `${PAYMENT_METHOD_TYPE}`;
