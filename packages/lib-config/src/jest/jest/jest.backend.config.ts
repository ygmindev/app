import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { globalsConfig } from '@lib/config/globals/globals.backend.config';
import { jestConfig as jestConfigBase } from '@lib/config/jest/jest/jest.base.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const jestConfig = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      globals: globalsConfig,

      setupFilesAfterEnv: [fromConfig('jest/setupFilesAfterEnv/setupFilesAfterEnv.backend.ts')],

      testEnvironment: 'node',
    },

    jestConfigBase,
  ],
});
