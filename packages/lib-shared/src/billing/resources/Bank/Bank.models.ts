import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface BankModel extends EmbeddedResourceModel {
  id: string;
}

export interface BankFormModel extends EntityResourceDataModel<BankModel> {}
