import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { type JOB_TRIGGER } from '@lib/config/job/job.constants';
import { type FREQUENCY } from '@lib/shared/datetime/datetime.models';

export type JobConfigModel = {
  jobs: Array<JobModel>;
  outPathname: string;
  version: number;
};

export type JobModel = {
  branch?: string;
  commands: Array<{
    command: string;
    name: string;
  }>;
  container?: ContainerConfigModel;
  environment?: Record<string, string>;
  name: string;
} & (
  | {
      trigger: JOB_TRIGGER.COMMIT;
    }
  | {
      schedule: {
        hour?: number;
        minute?: number;
        second?: number;
      } & ({ day?: never; freq: FREQUENCY.DAILY } | { day?: number; freq: FREQUENCY.WEEKLY });

      trigger: JOB_TRIGGER.SCHEDULE;
    }
);
