import { type EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
import { type ParallelOptionsModel } from '@tool/task/core/utils/mapParallel/mapParallel.models';

export type _MapParallelParamsModel = [
  tasks: Array<string>,
  options?: ParallelOptionsModel,
  environment?: EnvironmentOverrideParamsModel,
];

export type _MapParallelModel = void;
