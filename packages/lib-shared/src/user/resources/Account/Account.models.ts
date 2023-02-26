import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface AccountModel extends EntityResourceModel {}

export interface AccountFormModel extends EntityResourceDataModel<AccountModel> {}
