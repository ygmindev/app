import type { TaskParamsModel } from '@tool/task/core/core.models';
import { watch } from '@tool/task/core/templates/watch/watch';
import type { WatchParamsModel } from '@tool/task/core/templates/watch/watch.models';

export const dev: TaskParamsModel<WatchParamsModel> = {
  ...watch,

  name: 'dev',

  options: {
    patterns: ['lib-backend/src/**', 'lib-config/src/**', 'lib-shared/src/**'],
  },
};
