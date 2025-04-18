import { type TaskConfigModel } from '@lib/config/task/task.models';

export type _CliParamsModel = Pick<
  TaskConfigModel,
  'configFilename' | 'packageDirs' | 'taskExtension'
> & {
  task?: string;
};

export type _CliModel = void;
