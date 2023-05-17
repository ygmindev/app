import type { _SetupConfigModel, SetupConfigModel } from '@lib/config/core/setup/_setup.models';
import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';

export const _setupConfig: _SetupConfigModel = async () =>
  await importConfig<SetupConfigModel>('core/setup/setup');
