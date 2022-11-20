import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface SettingModel extends EntityResourceModel {}

export interface SettingFormModel extends EntityResourceDataModel<SettingModel> {}
