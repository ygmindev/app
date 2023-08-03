import { type EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';
import { type ParallelOptionsModel } from '#tool-task/core/utils/parallel/parallel.models';

export type _ParallelParamsModel = [
  tasks: Array<string>,
  options?: ParallelOptionsModel,
  environment?: EnvironmentOverrideParamsModel,
];

export type _ParallelModel = void;
