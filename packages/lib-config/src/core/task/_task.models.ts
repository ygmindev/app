import { ConfigDynamicModel, ConfigStaticModel, RunWithConfigParamsModel } from '@lib/config/core/core.models';

export type TaskConfigModel = ConfigStaticModel<RunWithConfigParamsModel<{ task?: string }> & {
  packageConfig: string;

  taskExtension: string;
}>;

export type _TaskConfigModel = ConfigDynamicModel<void>;
