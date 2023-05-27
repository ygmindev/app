import type { TaskParamsModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';

export const make: TaskParamsModel = {
  name: 'make',

  task: async ({ root }) => await command('sls package', { root }),
};
