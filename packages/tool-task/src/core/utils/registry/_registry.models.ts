import type { TaskStatusModel } from '@tool/task/core/utils/register/register.models';

export type _RegistryModel = Record<string, () => Promise<TaskStatusModel>>;
