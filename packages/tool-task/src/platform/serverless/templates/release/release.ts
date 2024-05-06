import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib/config/core/file/file';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import { copy } from '@tool/task/file/utils/copy/copy';

export const release: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'release',

  task: [
    () =>
      `npx sls config credentials --provider aws --profile default --overwrite --key ${process.env.AWS_ACCESS_KEY_ID} --secret ${process.env.AWS_SECRET_ACCESS_KEY}`,

    async () => {
      const root = fromWorking(fileConfig.buildPath, 'layers', 'nodejs');
      return copy({
        from: fromWorking('package.json'),
        isOverwrite: true,
        to: joinPaths([root, 'package.json']),
      });
    },

    () => {
      const root = fromWorking(fileConfig.buildPath, 'layers', 'nodejs');
      return `cd ${root} && npm install --unsafe-perm --omit=dev`;
    },

    async () => {
      const root = fromWorking(fileConfig.buildPath, 'layers', 'nodejs');
      await runClean({ patterns: fileConfig.prunePatterns, root });
    },

    () => {
      const root = fromWorking(fileConfig.buildPath, 'layers', 'nodejs');
      return `npx node-prune ${root}`;
    },

    () => {
      const root = fromWorking(fileConfig.buildPath, 'layers', 'nodejs');
      return `npx modclean -p ${root} -r`;
    },

    fromExecutable('sls deploy --aws-profile default --verbose'),
  ],
};
