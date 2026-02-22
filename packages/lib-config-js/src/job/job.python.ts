import { containerConfig } from '@lib/config/container/container.python';
import { jobConfig as configBase } from '@lib/config/job/job.base';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';
import { PING } from '@lib/shared/http/http.constants';

export const jobConfig = configBase.extend(() => ({
  container: containerConfig.params(),

  jobs: [
    {
      command: 'python /app/packages/service-server-py/src/ping.py ',
      name: PING,
      schedule: { freq: FREQUENCY.DAILY },
    },

    // {
    //   name: 'ratesUpload',
    //   schedule: { freq: FREQUENCY.DAILY },
    // },
  ],
}));
