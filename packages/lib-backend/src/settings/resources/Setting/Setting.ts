import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { SETTING_RESOURCE_NAME } from '@lib/shared/settings/resources/Setting/Setting.constants';
import type { SettingModel } from '@lib/shared/settings/resources/Setting/Setting.models';

@withEntity({ isRepository: true, name: SETTING_RESOURCE_NAME })
export class Setting extends EntityResource implements SettingModel {}
