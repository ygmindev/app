import { type _JobConfigModel } from '@lib/config/job/_job.models';
import configBase from '@lib/config/job/job.base';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<JobConfigModel, _JobConfigModel>({
  ...configBase,

  overrides: () => [
    {
      jobs: [],
    },
  ],
});

export default config;
