import { type PARALLEL_CONDITION } from '@tool/task/core/tasks/executeParallel/executeParallel.constants';

export type _ExecuteParallelParamsModel = {
  commands: Array<string>;
  condition?: PARALLEL_CONDITION;
  root?: string;
};

export type _ExecuteParallelModel = void;
