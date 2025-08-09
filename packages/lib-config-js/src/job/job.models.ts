import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { type FREQUENCY } from '@lib/shared/datetime/datetime.models';

export type JobConfigModel = JobModel;

export type JobModel = {
  command: string;
  container?: Partial<Omit<ContainerConfigModel, 'image'>> & Pick<ContainerConfigModel, 'image'>;
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
