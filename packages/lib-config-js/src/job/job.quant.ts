import { type _JobConfigModel } from '@lib/config/job/_job.models';
import configBase from '@lib/config/job/job.base';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';

export const config = defineConfig<JobConfigModel, _JobConfigModel>({
  ...configBase,

  overrides: () => [
    {
      jobs: [
        {
          name: 'ratesUpload',
          schedule: { freq: FREQUENCY.DAILY },
        },
      ],
    },
  ],
});

export default config;
