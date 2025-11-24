import { type TaskModel } from '@tool/task/core/utils/task/task.models';

export type TaskRegistryModel = {
  pathname: string;
  task: TaskModel;
};

export type CliModel = {
  aliases: Record<string, string>;

  registry: Record<string, TaskRegistryModel>;

  initialize(): Promise<void>;

  register(name: string, params: TaskRegistryModel): void;

  run(name?: string): Promise<void>;
};
