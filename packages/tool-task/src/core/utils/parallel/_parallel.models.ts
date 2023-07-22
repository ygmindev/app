import { type ParallelConditionModel } from '#tool-task/core/utils/parallel/parallel.models';

export type _ParallelParamsModel = [
  tasks: Array<string>,
  options?: { condition?: ParallelConditionModel },
];

export type _ParallelModel = void;
