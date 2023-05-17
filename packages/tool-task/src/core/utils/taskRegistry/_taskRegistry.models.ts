import type { TaskResultModel } from '@tool/task/core/core.models';

export type _TaskRegistryModel = Record<string, () => Promise<TaskResultModel>>;
