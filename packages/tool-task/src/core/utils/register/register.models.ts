import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
import type { _RegisterParamsModel } from '@tool/task/core/utils/register/_register.models';
import type { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';

export interface RegisterContextModel<TOptions = object>
  extends Pick<RegisterParamsModel, 'target'> {
  name: string;
  options: TOptions;
  root: string;
}

export interface RegisterParamsModel<TOptions = object>
  extends Omit<_RegisterParamsModel, 'task'>,
    EnvironmentOverrideParamsModel {
  cleanups?: Array<string | CallablePromiseModel>;
  dependencies?: Array<string | CallablePromiseModel>;
  options?: TOptions;
  target?: string;
  task(context: RegisterContextModel<TOptions>): Promise<TaskResultsModel>;
}

export interface RegisterResultsModel {
  alias: string;
  name: string;
}

export type TaskResultsStatusModel = `${TASK_RESULTS_STATUS_TYPE}`;

export interface TaskResultsModel {
  message?: string;
  status: TaskResultsStatusModel;
}
