import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { type FREQUENCY } from '@lib/shared/datetime/datetime.models';

export type JobConfigModel = {
  container?: Pick<ContainerConfigModel, 'image' | 'server' | 'username'>;
  env?: Array<string>;
  jobs: Array<JobModel>;
  outPathname: string;
};

export type JobModel = {
  command?: string;
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
