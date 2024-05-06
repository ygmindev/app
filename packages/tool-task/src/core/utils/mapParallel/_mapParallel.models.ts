import { type EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
import { type ParallelOptionsModel } from '@tool/task/core/utils/mapParallel/mapParallel.models';

export type _mapMapParallelParamsModel = [
  tasks: Array<string>,
  options?: ParallelOptionsModel,
  environment?: EnvironmentOverrideParamsModel,
];

export type _mapMapParallelModel = void;
