import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _TestConfigModel, TestConfigModel } from '@lib/config/node/test/test.models';
import { PLATFORM } from '@lib/platform/core/core.constants';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';
import mapKeys from 'lodash/mapKeys';
import reduce from 'lodash/reduce';
import trim from 'lodash/trim';
import trimStart from 'lodash/trimStart';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from '../../../../../.build/tsconfig.json';

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
}: ReturnTypeModel<TestConfigModel>): ReturnTypeModel<_TestConfigModel> => {
  const _bundleConfig = bundleConfig();
  return {
    cacheDirectory: cachePath,

    collectCoverage: true,

    coverageDirectory: coverageOutputPath,

    coverageReporters: ['lcov'],

    globals: _bundleConfig.define,

    maxWorkers: -1,

    moduleFileExtensions: _bundleConfig.extensions.map((ext) => trimStart(ext, '.')),

    moduleNameMapper: {
      ...mapKeys(_bundleConfig.aliases, (k) => `^${k}$`),
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

    testEnvironment: _bundleConfig.platform === PLATFORM.WEB ? 'jsdom' : 'node',

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
      // '^.+\\.(js|jsx)$': 'babel-jest',
      // '^.+\\.(ts|tsx)$': [
      //   'ts-jest',
      //   { babelConfig: _bundleConfig.babelConfig, tsconfig: fromWorking('tsconfig.json') },
      // ],
      '^.+\\.(t|j)sx?$': [
        'ts-jest',
        { isolatedModules: true, tsconfig: fromWorking('tsconfig.json') },
      ],
    },

    transformIgnorePatterns: _bundleConfig.externals
      ? [`node_modules/(?!(${_bundleConfig.externals.join('|')})/)`]
      : [],

    watch: isWatch,
  };
};
