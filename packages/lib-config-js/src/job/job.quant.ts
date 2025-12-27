import { jobConfig as configBase } from '@lib/config/job/job.base';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';

export const jobConfig = configBase.extend(() => ({
  jobs: [
    {
      name: 'ratesUpload',
      schedule: { freq: FREQUENCY.DAILY },
    },
  ],
}));
