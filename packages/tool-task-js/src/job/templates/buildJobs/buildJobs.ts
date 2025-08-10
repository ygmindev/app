import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { bundle } from '@tool/task/node/utils/bundle/bundle';

const buildJobs: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [
    async () => {
      const jobEntries = fromGlobs(['**/*.job.ts'], { isAbsolute: true });
      if (jobEntries) {
        const entryFiles = jobEntries.reduce(
          (result, v) => ({ ...result, [fileInfo(v).main]: v }),
          {} as Record<string, string>,
        );
        await bundle({ entryFiles });
      }
    },
  ],

  variables: () => ({
    ENV_PLATFORM: PLATFORM.NODE,
  }),
};

export default buildJobs;
