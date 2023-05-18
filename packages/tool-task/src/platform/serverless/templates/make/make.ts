import serverlessConfig from '@lib/config/platform/serverless/serverless.base';
import type { TaskParamsModel } from '@tool/task/core/core.models';

export const make: TaskParamsModel = {
  name: 'make',

  task: async ({ root }) => await serverlessConfig.build.task({ root }),
};
