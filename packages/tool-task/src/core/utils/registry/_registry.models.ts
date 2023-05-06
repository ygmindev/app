import type { TaskStatusModel } from '@tool/task/core/core.models';

export type _RegistryModel = Record<string, () => Promise<TaskStatusModel>>;
