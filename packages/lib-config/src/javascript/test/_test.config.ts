import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { bundleConfigParams } from '@lib/config/javascript/bundle/params/bundle.params';
import type {
  _TestConfigModel,
  _TestConfigParamsModel,
} from '@lib/config/javascript/test/_test.models';
import { compilerOptions } from '@lib/config/javascript/typescript/configs/tsconfig.paths.json';
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
  async () => ({
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

    resolver: fromConfig('javascript/test/_resolver.js'),

    rootDir: root,

    roots: ['<rootDir>', fromConfig('javascript/test')],

    setupFilesAfterEnv: [fromConfig('javascript/test/_initialize.ts')],

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
      '^.+\\.(ts|tsx)$': [
        'ts-jest',
        { babelConfig: fromWorking('babel.config.js'), tsconfig: fromWorking('tsconfig.json') },
      ],
    },

    transformIgnorePatterns: bundleConfigParams.externals
      ? [`node_modules/(?!(${bundleConfigParams.externals.join('|')})/)`]
      : [],

    watch: isWatch,
  });
