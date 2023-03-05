import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface BankModel extends EmbeddedResourceModel {
  bank: string;

  id: string;

  last4: string;
}

export interface BankFormModel extends EntityResourceDataModel<BankModel> {}
