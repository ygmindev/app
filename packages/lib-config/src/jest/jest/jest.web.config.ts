import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { globalsConfig } from '@lib/config/globals/globals.web.config';
import { jestConfig as jestConfigBase } from '@lib/config/jest/jest/jest.base.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import {
  FRONTEND_EXTENSIONS,
  NODE_EXTENSIONS,
  TRANSPILE_GLOBS,
  WEB_EXTENSIONS,
} from '@lib/shared/file/file.constants';
import { trimStart } from 'lodash';

export const jestConfig = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      globals: globalsConfig,

      moduleFileExtensions: [...WEB_EXTENSIONS, ...FRONTEND_EXTENSIONS, ...NODE_EXTENSIONS].map(
        (ext: string) => trimStart(ext, '.'),
      ),

      moduleNameMapper: {
        '\\.(css|sass)$': 'identity-obj-proxy',
        '^react-native$': 'react-native-web',
      },

      setupFilesAfterEnv: [fromConfig('jest/setupFilesAfterEnv/setupFilesAfterEnv.web.ts')],

      testEnvironment: 'jsdom',

      transformIgnorePatterns: [
        `node_modules/(?!(${fromGlobs({
          globs: TRANSPILE_GLOBS,
          isAbsolute: false,
          root: fromRoot('node_modules'),
        }).join('|')})/)`,
      ],
    },

    jestConfigBase,
  ],
});
