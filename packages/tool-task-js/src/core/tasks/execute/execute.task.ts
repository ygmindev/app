import { _execute } from '@tool/task/core/tasks/execute/_execute';
import {
  type ExecuteModel,
  type ExecuteParamsModel,
} from '@tool/task/core/tasks/execute/execute.models';

export const execute = async ({ ...params }: ExecuteParamsModel): Promise<ExecuteModel> =>
  _execute({ ...params });
