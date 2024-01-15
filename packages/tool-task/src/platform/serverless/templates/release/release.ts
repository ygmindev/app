import { fromWorking } from '@lib-backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib-backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib-config/core/file/file';
import { ENVIRONMENT } from '@lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool-task/core/core.models';
import { runClean } from '@tool-task/core/utils/runClean/runClean';
import { copy } from '@tool-task/file/utils/copy/copy';

export const release: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'release',

  task: [
    async () =>
      {
        const root = fromWorking(fileConfig.buildPath, 'layers', 'nodejs');
        await copy({ isOverwrite: true, from: fromWorking('package.json'), to: joinPaths([root, 'package.json']) });
        await runClean({ root: joinPaths([root, 'node_modules']), patterns: fileConfig.prunePatterns });
      },

      async () => {
        
      },

      // 'npx sls deploy --aws-profile default --verbose',
  ],
};
