import { type TaskParamsModel } from '@tool/task/core/core.models';
import { watch } from '@tool/task/core/templates/watch/watch';
import { type DevParamsModel } from '@tool/task/node/templates/dev/dev.models';

export const dev: TaskParamsModel<DevParamsModel> = {
  ...watch,

  name: 'dev',

  overrides: {
    patterns: ['lib-backend/src/**', 'lib-config/src/**', 'lib-shared/src/**'],
  },
};
