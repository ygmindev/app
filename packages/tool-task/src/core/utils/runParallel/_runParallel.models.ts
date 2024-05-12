import { type EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
import { type ParallelOptionsModel } from '@tool/task/core/utils/runParallel/runParallel.models';

export type _RunParallelParamsModel = [
  tasks: Array<string>,
  options?: ParallelOptionsModel,
  environment?: EnvironmentOverrideParamsModel,
];

export type _RunParallelModel = void;
