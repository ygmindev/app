import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { containerConfig } from '@lib/config/container/container.base';
import { _job } from '@lib/config/job/_job';
import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { Config } from '@lib/config/utils/Config/Config';

export const jobConfig = new Config<JobConfigModel, _JobConfigModel>({
  config: _job,

  params: () => {
    const { image, server, username } = containerConfig.params();
    return {
      container: { image, server, username },
      jobs: [],
      outPathname: fromRoot('.github/workflows'),
    };
  },
});
