import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _BabelConfigModel } from '@lib/config/node/babel/_babel.models';
import type { _BundleConfigParamsModel } from '@lib/config/node/bundle/_bundle.models';
import type {
  _TestConfigModel,
  _TestConfigParamsModel,
} from '@lib/config/node/test/_test.models';
import { compilerOptions } from '@lib/config/node/typescript/configs/tsconfig.paths.json';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { mapKeys, reduce, trim, trimStart } from 'lodash';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

export const _testConfig =
  ({
    cachePath,
    coverageOutputPath,
    fileExtensions,
    isWatch,
    match,
    mockPath,
    root,
    testExtensions,
    timeout,
  }: _TestConfigParamsModel): _TestConfigModel =>
  async () => {
    const babelConfig = await importFromEnv<_BabelConfigModel>(
      '@lib/config/node/babel/configs/babel.config',
    );
    const bundleConfigParams = await importFromEnv<
      _BundleConfigParamsModel
    >('@lib/config/node/bundle/params/bundle.params');

    return {
      cacheDirectory: cachePath,

      collectCoverage: true,

      coverageDirectory: coverageOutputPath,

      coverageReporters: ['lcov'],

      globals: bundleConfigParams.define,

      maxWorkers: -1,

      moduleFileExtensions: bundleConfigParams.extensions.map((ext) => trimStart(ext, '.')),

      moduleNameMapper: {
        ...mapKeys(bundleConfigParams.aliases, (k) => `^${k}$`),
        ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: fromRoot() }),
        [`\\.(${fileExtensions.join('|')})$`]: join(mockPath, 'file'),
      },

      passWithNoTests: true,

      preset: 'ts-jest',

      reporters: [
        'default',
        [
          'jest-stare',
          {
            coverageLink: join(coverageOutputPath, 'lcov-report/index.html'),
            reportSummary: true,
            resultDir: join(coverageOutputPath, 'js-stare'),
          },
        ],
      ],

      resolver: fromConfig('node/test/_resolver.js'),

      rootDir: root,

      roots: ['<rootDir>', fromConfig('node/test')],

      setupFilesAfterEnv: [fromConfig('node/test/_initialize.ts')],

      testEnvironment: bundleConfigParams.platform === PLATFORM.WEB ? 'jsdom' : 'node',

      testMatch: reduce(
        testExtensions,
        (result, ext) => {
          const _ext = trim(ext, '.');
          return [
            ...result,
            `<rootDir>/src/**/${match}.${_ext}`,
            `<rootDir>/src/**/_${match}.${_ext}`,
          ];
        },
        [] as Array<string>,
      ),

      testTimeout: timeout,

      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': ['ts-jest', { babelConfig, tsconfig: fromWorking('tsconfig.json') }],
      },

      transformIgnorePatterns: bundleConfigParams.externals
        ? [`node_modules/(?!(${bundleConfigParams.externals.join('|')})/)`]
        : [],

      watch: isWatch,
    };
  };
