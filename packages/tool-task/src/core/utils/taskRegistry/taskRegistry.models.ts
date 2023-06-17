import type { TaskParamsModel } from '#tool-task/core/core.models';
import type { _TaskRegistryModel } from '#tool-task/core/utils/TaskRegistry/_TaskRegistry.models';

export type TaskRegistryModel = {
  aliases: Record<string, string>;

  register<TType = undefined>(params: TaskParamsModel<TType>): void;
} & _TaskRegistryModel;
