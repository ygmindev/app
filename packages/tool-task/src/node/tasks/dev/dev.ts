import { watch } from '@tool/task/core/tasks/watch/watch';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

export const dev: RegisterParamsModel = {
  ...watch,

  name: 'dev',

  options: {
    patterns: ['lib-backend/src/**', 'lib-config/src/**', 'lib-shared/src/**'],
  },
};
