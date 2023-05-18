import type { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';
import type { TaskParamsModel } from '@tool/task/core/core.models';

export type TaskConfigModel = ConfigStaticModel<
  Pick<TaskParamsModel<{ task?: string }>, 'task'> & {
    packageConfig: string;

    taskExtension: string;
  }
>;

export type _TaskConfigModel = ConfigDynamicModel<void>;
