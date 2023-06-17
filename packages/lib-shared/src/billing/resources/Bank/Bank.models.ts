import type { PaymentMethodTypeModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type BankModel = {
  bank: string;

  id: string;

  last4: string;

  type?: PaymentMethodTypeModel;
} & EmbeddedResourceModel;

export type BankFormModel = EntityResourceDataModel<BankModel>;
