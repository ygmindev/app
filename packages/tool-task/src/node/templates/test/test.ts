import { type Config } from '@jest/types';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type TestParamsModel } from '@tool/task/node/templates/test/test.models';
import { runCLI } from 'jest';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  options: ({ overrides }) =>
    filterNil([overrides?.isPrompt && { isOptional: true, key: 'testMatch' }]),

  task: [
    async ({ options, root }) => {
      const { _config } = await importConfig<TestConfigModel, _TestConfigModel>('node/test/test', [
        { match: options?.testMatch, root },
      ]);
      await runCLI(
        {
          config: JSON.stringify(_config),
          runInBand: true,
          watch: options?.isWatch,
        } as Config.Argv,
        [root ?? fromWorking()],
      );
    },
  ],
};
