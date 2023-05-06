import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _TaskConfigParamsModel {
  tasks: Array<{ name: string; task: CallablePromiseModel }>;
}
