import testConfig from '@lib/config/python/test/test';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const test: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  task: [
    () => {
      const { command, ...config } = testConfig.params();
      return command(config);
    },
  ],
};
