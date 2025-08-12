import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { type FREQUENCY } from '@lib/shared/datetime/datetime.models';

export type JobConfigModel = {
  container?: Pick<ContainerConfigModel, 'image' | 'server' | 'username'>;
  jobs: Array<JobModel>;
  outPathname: string;
  root: string;
};

export type JobModel = {
  command?: string;
  env?: Array<string>;
  name: string;
  schedule: {
    hour?: number;
    minute?: number;
    second?: number;
  } & (
    | {
        day?: never;
        freq: FREQUENCY.DAILY;
      }
    | {
        day?: number;
        freq: FREQUENCY.WEEKLY;
      }
  );
};
