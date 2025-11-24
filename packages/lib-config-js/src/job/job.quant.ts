import { jobConfig as configBase } from '@lib/config/job/job.base';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';

let jobConfig = configBase;

jobConfig = jobConfig.extend(() => ({
  jobs: [
    {
      name: 'ratesUpload',
      schedule: { freq: FREQUENCY.DAILY },
    },
  ],
}));

export { jobConfig };
