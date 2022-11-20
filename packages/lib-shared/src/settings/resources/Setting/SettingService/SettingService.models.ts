import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type {
  SettingFormModel,
  SettingModel,
} from '@lib/shared/settings/resources/Setting/Setting.models';

export interface SettingServiceModel
  extends EntityResourceServiceModel<SettingModel, SettingFormModel> {}
