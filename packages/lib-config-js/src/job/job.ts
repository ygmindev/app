import { _job } from '@lib/config/job/_job';
import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';

export const config = defineConfig<JobConfigModel, _JobConfigModel>({
  config: _job,

  params: ({
    
  }) => ({
    jobs: [
      {
        command: 'echo hello',
        name: 'daily',
        schedule: {
          freq: FREQUENCY.DAILY,
        },
      },
    ],

    name: '',
  }),
});

export default config;
