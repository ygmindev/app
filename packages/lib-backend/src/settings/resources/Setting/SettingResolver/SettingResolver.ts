import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { Setting } from '@lib/backend/settings/resources/Setting/Setting';
import { SettingService } from '@lib/backend/settings/resources/Setting/SettingService/SettingService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { SETTING_RESOURCE_NAME } from '@lib/shared/settings/resources/Setting/Setting.constants';
import type {
  SettingFormModel,
  SettingModel,
} from '@lib/shared/settings/resources/Setting/Setting.models';

@withContainer()
@withResolver({ Resource: Setting })
export class SettingResolver
  extends EntityResourceResolver<SettingModel, SettingFormModel>({
    Resource: Setting,
    ResourceService: SettingService,
    name: SETTING_RESOURCE_NAME,
  })
  implements EntityResourceResolverModel<SettingModel, SettingFormModel> {}
