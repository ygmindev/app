import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { config as containerConfig } from '@lib/config/container/container.base';
import { _job } from '@lib/config/job/_job';
import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<JobConfigModel, _JobConfigModel>({
  config: _job,

  params: () => {
    const { image, server, username } = containerConfig.params();
    return {
      container: { image, server, username },
      env: { ...process.env },
      jobs: [],
      outPathname: fromRoot('.github/workflows'),
    };
  },
});

export default config;
