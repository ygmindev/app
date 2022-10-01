import type { TaskResultsModel } from '@tool/task/core/utils/register/register.models';

export type _RegistryModel = Record<string, () => Promise<TaskResultsModel>>;
