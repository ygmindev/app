import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';

export type TaskRegistryModel = {
  pathname: string;
  task: TaskModel;
};

export type CliModel = BootstrappableModel & {
  aliases: Record<string, string>;

  registry: Record<string, TaskRegistryModel>;

  register(name: string, params: TaskRegistryModel): void;

  run(name?: string): Promise<void>;
};
