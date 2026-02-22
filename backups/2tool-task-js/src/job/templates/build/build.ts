import { buildYaml } from '@lib/backend/file/utils/buildYaml/buildYaml';
import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { BUILD_DIR, DIST_DIR } from '@lib/config/file/file.constants';
import { jobConfig } from '@lib/config/job/job.quant';
import { bundleConfig } from '@lib/config/node/bundle/bundle.base';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import { bundle } from '@tool/task/node/utils/bundle/bundle';
import { parse } from 'dotenv';
import { readFileSync } from 'fs';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [
    async () => {
      await runClean({ patterns: [DIST_DIR, BUILD_DIR], root: fromWorking() });

      const outDir = fromWorking(DIST_DIR);
      const jobEntries = fromGlobs(['**/*.job.ts'], { isAbsolute: true });
      if (jobEntries) {
        const entryFiles = jobEntries.reduce(
          (result, v) => ({ ...result, [fileInfo(v).main]: v }),
          {} as Record<string, string>,
        );
        await bundle({ entryFiles, outDir });
      }
    },

    async () => {
      const { outPathname } = jobConfig.params();
      const { buildDir, envFilename } = bundleConfig.params();
      const env = parse(readFileSync(fromWorking(buildDir, envFilename), 'utf-8'));
      await Promise.all(
        jobConfig.config({ env: Object.keys(env) }).map((job) =>
          writeFile({
            filename: joinPaths([outPathname, `${slug(job.name)}.yaml`]),
            value: buildYaml(job),
          }),
        ),
      );
    },
  ],

  variables: () => ({
    ENV_PLATFORM: PLATFORM.NODE,
  }),
};
