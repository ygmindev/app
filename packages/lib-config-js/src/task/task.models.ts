import { type FileConfigModel } from '@lib/config/file/file.models';

export type TaskConfigModel = Pick<FileConfigModel, 'packageDirs'> & {
  configFilename: string;

  taskExtension: string;

  wait: {
    delay: number;
    interval: number;
    timeout: number;
  };
};
