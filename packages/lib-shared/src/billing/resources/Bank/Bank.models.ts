import { type PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type BankModel = EmbeddedResourceModel & {
  bank: string;

  id: string;

  last4: string;

  type: PAYMENT_METHOD_TYPE.BANK;
};

export type BankFormModel = EntityResourceDataModel<BankModel>;
