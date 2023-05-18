import type {
  CallableModel,
  CallablePromiseModel,
  ReturnTypeModel,
} from '@lib/shared/core/core.models';
import type { TaskResultModel } from '@tool/task/core/core.models';
import type { CommandOptionsModel } from '@tool/task/core/utils/command/command.models';

export type ConfigDynamicModel<TType> =
  | CallablePromiseModel<ReturnTypeModel<TType>>
  | CallableModel<ReturnTypeModel<TType>>;

export type ConfigStaticModel<TType> = ReturnTypeModel<TType>;

export interface RunWithConfigParamsModel<TType = undefined> {
  config?: string;
  run(params: CommandOptionsModel & { options?: TType }): Promise<TaskResultModel>;
}
