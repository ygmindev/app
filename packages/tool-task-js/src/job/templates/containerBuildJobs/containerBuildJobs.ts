import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { DIST_DIR } from '@lib/config/file/file.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { bundle } from '@tool/task/node/utils/bundle/bundle';

export const containerBuildJobs: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'container-build',

  task: [
    async () => {
      const jobEntries = fromGlobs(['**/*.job.ts'], { isAbsolute: true });
      if (jobEntries) {
        const entryFiles = jobEntries.reduce(
          (result, v) => ({ ...result, [fileInfo(v).main]: v }),
          {} as Record<string, string>,
        );
        await bundle({ entryFiles, outputPathname: fromWorking(DIST_DIR) });
      }
    },
  ],

  variables: () => ({
    ENV_PLATFORM: PLATFORM.NODE,
  }),
};
