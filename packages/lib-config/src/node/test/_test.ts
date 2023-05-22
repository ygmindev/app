import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _TestConfigModel, TestConfigModel } from '@lib/config/node/test/test.models';
import { compilerOptions } from '@lib/config/node/typescript/tsconfig.paths.json';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { ReturnTypeModel } from '@lib/shared/core/core.models';
import { mapKeys, reduce, trim, trimStart } from 'lodash';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

export const _test = ({
  bundleConfig,
  cachePath,
  coverageOutputPath,
  fileExtensions,
  isWatch,
  match,
  mockPath,
  root,
  testExtensions,
  timeout,
}: ReturnTypeModel<TestConfigModel>): _TestConfigModel => () => ({
    cacheDirectory: cachePath,

    collectCoverage: true,

    coverageDirectory: coverageOutputPath,

    coverageReporters: ['lcov'],

    globals: bundleConfig.define,

    maxWorkers: -1,

    moduleFileExtensions: bundleConfig.extensions.map((ext) => trimStart(ext, '.')),

    moduleNameMapper: {
      ...mapKeys(bundleConfig.aliases, (k) => `^${k}$`),
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

    testEnvironment: bundleConfig.platform === PLATFORM.WEB ? 'jsdom' : 'node',

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
      '^.+\\.(ts|tsx)$': ['ts-jest', { babelConfig: bundleConfig.babelConfig, tsconfig: fromWorking('tsconfig.json') }],
    },

    transformIgnorePatterns: bundleConfig.externals
      ? [`node_modules/(?!(${bundleConfig.externals.join('|')})/)`]
      : [],

    watch: isWatch,
  });