import { type AsyncCallableModel } from '@lib/shared/core/core.models';

export type TaskRegistryModel = {
  pathname: string;
  task: AsyncCallableModel;
};

export type CliModel = {
  aliases: Record<string, string>;

  registry: Record<string, TaskRegistryModel>;

  initialize(): Promise<void>;

  register(name: string, params: TaskRegistryModel): void;
};
