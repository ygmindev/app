import { TASK_STATUS } from '#tool-task/core/core.constants';
import { _runClean } from '#tool-task/core/utils/runClean/_runClean';
import {
  type RunCleanModel,
  type RunCleanParamsModel,
} from '#tool-task/core/utils/runClean/runClean.models';

export const runClean = async (params: RunCleanParamsModel): Promise<RunCleanModel> => {
  try {
    await _runClean(params);
    return { status: TASK_STATUS.SUCCESS };
  } catch (e) {
    return { error: e as Error, status: TASK_STATUS.ERROR };
  }
};
