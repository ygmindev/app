import type { TaskResultModel } from '@tool/task/core/core.models';
import { _RunCleanParams } from '@tool/task/core/utils/runClean/_runClean.models';

export interface RunCleanParamsModel extends _RunCleanParams {}

export type RunCleanModel = Promise<TaskResultModel>;
