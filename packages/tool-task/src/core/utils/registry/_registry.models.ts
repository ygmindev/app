import type { TaskStatusModel } from '@lib/config/core/task/task.models';

export type _RegistryModel = Record<string, () => Promise<TaskStatusModel>>;
