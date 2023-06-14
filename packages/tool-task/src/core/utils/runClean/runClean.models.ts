import type { TaskResultModel } from '#tool-task/core/core.models';
import type { _RunCleanParamsModel } from '#tool-task/core/utils/runClean/_runClean.models';

export interface RunCleanParamsModel extends _RunCleanParamsModel {}

export type RunCleanModel = Promise<TaskResultModel>;
