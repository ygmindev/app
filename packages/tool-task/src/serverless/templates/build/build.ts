import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR, FILE_CONFIG } from '@lib/config/file/file.constants';
import serverlessConfig from '@lib/config/serverless/serverless.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskModel, type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import { copy } from '@tool/task/file/utils/copy/copy';

export const LAYER_TASKS: Array<TaskModel<unknown>> = [
  async () => {
    const root = fromWorking(BUILD_DIR, 'layers', 'nodejs');
    return copy({
      from: fromWorking('package.json'),
      isOverwrite: true,
      to: joinPaths([root, 'package.json']),
    });
  },

  () => {
    const root = fromWorking(BUILD_DIR, 'layers', 'nodejs');
    return `cd ${root} && npm install --unsafe-perm --omit=dev`;
  },

  async () => {
    const root = fromWorking(BUILD_DIR, 'layers', 'nodejs');
    await runClean({ patterns: FILE_CONFIG.prunePatterns, root });
  },

  () => {
    const root = fromWorking(BUILD_DIR, 'layers', 'nodejs');
    return `npx node-prune ${root}`;
  },

  () => {
    const root = fromWorking(BUILD_DIR, 'layers', 'nodejs');
    return `npx modclean -p ${root} -r`;
  },
];

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [
    ...LAYER_TASKS,
    fromExecutable(`sls package --config ${serverlessConfig.params().configFilename} --verbose`),
  ],
};
