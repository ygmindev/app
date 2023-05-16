import type { CallablePromiseModel, ReturnTypeModel } from '@lib/shared/core/core.models';
import type { TaskResultModel } from '@tool/task/core/core.models';
import type { _CommandParamsModel } from '@tool/task/core/utils/command/_command.models';

export type RunWithConfigParamsModel<TType = undefined> = (
  | RunWithConfigStringParamsModel
  | RunWithConfigCallableParamsModel<TType>
) &
  _CommandParamsModel;

export type RunWithConfigStringParamsModel = {
  command: string;
  config?: string;
};

export type RunWithConfigCallableParamsModel<TType = undefined> = {
  command: CallablePromiseModel<void, ReturnTypeModel<TType>>;
  config?: ReturnTypeModel<TType>;
};

export type RunWithConfigModel = TaskResultModel;
