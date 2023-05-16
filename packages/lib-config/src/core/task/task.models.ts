import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';

export type TaskConfigParamsModel = RunWithConfigStringParamsModel & {
  taskExtension: string;
};

export type TaskConfigModel = void;
