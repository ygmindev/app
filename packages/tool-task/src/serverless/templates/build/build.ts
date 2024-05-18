import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib/config/core/file/file';
import { SERVERLESS_CONFIG } from '@lib/config/serverless/serverless.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskModel, type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import { copy } from '@tool/task/file/utils/copy/copy';

export const LAYER_TASKS: Array<TaskModel<unknown>> = [
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
];

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [
    ...LAYER_TASKS,
    fromExecutable(`sls package --config ${SERVERLESS_CONFIG.configFile} --verbose`),
  ],
};
