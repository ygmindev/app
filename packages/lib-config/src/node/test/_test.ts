import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { _config } from '@lib/config/node/typescript/typescript';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import reduce from 'lodash/reduce';
import trim from 'lodash/trim';
import trimStart from 'lodash/trimStart';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

export const _test = ({
  bundleConfig,
  cachePath,
  eteExtension,
  fileExtensions,
  isWatch,
  match,
  mockDir,
  outputPath,
  root,
  specExtension,
  timeout,
}: TestConfigModel): _TestConfigModel => {
  const bundleConfigF = bundleConfig();
  const testExtension =
    process.env.TEST_IS_ETE === BOOLEAN_STRING.TRUE ? eteExtension : specExtension;
  return {
    cacheDirectory: fromWorking(cachePath),

    collectCoverage: true,

    coverageDirectory: fromWorking(outputPath, 'coverage'),

    coverageReporters: ['lcov'],

    globals: bundleConfigF.define,

    maxWorkers: -1,

    moduleFileExtensions: bundleConfigF.extensions.map((ext) => trimStart(ext, '.')),

    moduleNameMapper: {
      ...reduce(bundleConfigF.aliases, (result, v, k) => ({ ...result, [`^${k}$`]: v }), {}),
      ...(_config.compilerOptions?.paths
        ? pathsToModuleNameMapper(_config.compilerOptions.paths, { prefix: fromRoot() })
        : {}),
      [`(${fileExtensions.join('|')})$`]: join(mockDir, 'file'),
    },

    passWithNoTests: true,

    preset: 'ts-jest',

    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          darkTheme: true,
          openReport: false,
          publicPath: fromWorking(outputPath, 'reports'),
        },
      ],
    ],

    resolver: fromConfig('node/test/_resolver.js'),

    rootDir: root ?? fromRoot(),

    roots: ['<rootDir>', fromRoot(), fromConfig('node/test')],

    setupFilesAfterEnv: [fromConfig('node/test/_initialize.ts')],

    testEnvironment: process.env.ENV_PLATFORM === PLATFORM.WEB ? 'jsdom' : 'node',

    testMatch: testExtension
      ? reduce(
          permuteString([testExtension], bundleConfigF.extensions),
          (result, ext) => {
            const extF = trim(ext, '.');
            return [
              ...result,
              joinPaths([`<rootDir>/src/**/${match || '*'}`], { extension: extF }),
              joinPaths([`<rootDir>/src/**/_${match || '*'}`], { extension: extF }),
            ];
          },
          [] as Array<string>,
        )
      : [],

    testTimeout: timeout,

    transform: {
      '^.+\\.(t|j)sx?$': [
        'ts-jest',
        { isolatedModules: true, tsconfig: fromWorking('tsconfig.json') },
      ],
    },

    transformIgnorePatterns: bundleConfigF.transpiles
      ? [`node_modules/(?!(${bundleConfigF.transpiles.join('|')})/)`]
      : [],

    watch: isWatch,
  };
};
