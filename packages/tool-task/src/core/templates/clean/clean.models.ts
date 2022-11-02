import type { RunCleanParamsModel } from '@tool/task/core/utils/runClean/runClean.models';

export interface CleanParamsModel extends Omit<RunCleanParamsModel, 'root'> {}
