import type { _ServerlessConfigParamsModel } from '@lib/config/framework/serverless/_serverless.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { runWithConfig } from '@tool/task/core/utils/runWithConfig/runWithConfig';

export const make: TaskParamsModel = {
  name: 'make',

  task: async ({ root }) => {
    const serverlessConfigParams = await importFromEnv<
      _ServerlessConfigParamsModel
    >('@lib/config/framework/serverless/params/serverless.params');

    return await runWithConfig({ ...serverlessConfigParams.build, root });
  },
};
