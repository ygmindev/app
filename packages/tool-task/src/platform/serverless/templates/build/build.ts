import type { TaskParamsModel } from '#tool-task/core/core.models';
import { command } from '#tool-task/core/utils/command/command';

export const build: TaskParamsModel = {
  name: 'build',

  task: async ({ root }) => command('sls package', { root }),
};
