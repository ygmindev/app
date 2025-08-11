import { type Config } from '@jest/types';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { importConfig } from '@lib/config/utils/importConfig/importConfig';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type TestParamsModel } from '@tool/task/node/templates/test/test.models';
import { runCLI } from 'jest';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  options: async ({ overrides }) =>
    overrides?.isPrompt ? { testMatch: { isOptional: true } } : {},

  task: [
    async ({ options, root }) => {
      const config = await importConfig<TestConfigModel, _TestConfigModel>('node/test/test', [
        { match: options?.testMatch, root },
      ]);
      await runCLI(
        {
          config: JSON.stringify(config.config),
          runInBand: true,
          watch: options?.isWatch,
        } as Config.Argv,
        [root ?? fromWorking()],
      );
    },
  ],
};
