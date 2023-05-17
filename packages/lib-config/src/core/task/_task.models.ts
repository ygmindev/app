import { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';
import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';

export type TaskConfigModel = ConfigStaticModel<RunWithConfigStringParamsModel & {
  taskExtension: string;
}>;

export type _TaskConfigModel = ConfigDynamicModel<void>;
