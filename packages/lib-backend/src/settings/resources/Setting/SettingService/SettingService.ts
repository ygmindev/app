import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { SETTING_RESOURCE_NAME } from '@lib/shared/settings/resources/Setting/Setting.constants';
import type {
  SettingFormModel,
  SettingModel,
} from '@lib/shared/settings/resources/Setting/Setting.models';
import type { SettingServiceModel } from '@lib/shared/settings/resources/Setting/SettingService/SettingService.models';

@withContainer({ name: `${SETTING_RESOURCE_NAME}Service` })
export class SettingService
  extends EntityResourceService<SettingModel, SettingFormModel>({
    name: SETTING_RESOURCE_NAME,
  })
  implements SettingServiceModel {}
