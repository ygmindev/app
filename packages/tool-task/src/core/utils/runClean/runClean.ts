import { _runClean } from '@tool/task/core/utils/runClean/_runClean';
import {
  type RunCleanModel,
  type RunCleanParamsModel,
} from '@tool/task/core/utils/runClean/runClean.models';

export const runClean = async (params: RunCleanParamsModel): Promise<RunCleanModel> =>
  _runClean(params);
