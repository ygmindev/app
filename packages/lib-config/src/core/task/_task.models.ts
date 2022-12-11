import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _TaskParamsModel {
  name: string;
  task: CallablePromiseModel;
}

export interface _TaskConfigParamsModel {
  tasks: Array<_TaskParamsModel>;
}
