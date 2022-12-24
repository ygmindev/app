import type { Config } from '@jest/types';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _TestConfigParamsModel } from '@lib/config/node/test/_test.models';
import { compilerOptions } from '@lib/config/node/typescript/tsconfig.paths.json';
import { reduce, trim, trimStart } from 'lodash';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

export const _testConfig = ({
  cachePath,
  coverageOutputPath,
  extensions,
  externals,
  fileExtensions,
  isWatch,
  match,
  mockPath,
  resolveExtensions,
  root,
  timeout,
}: _TestConfigParamsModel): Config.InitialOptions => ({
  cacheDirectory: cachePath,

  collectCoverage: true,

  coverageDirectory: coverageOutputPath,

  coverageReporters: ['lcov'],

  globalTeardown: fromConfig('node/test/_cleanup.ts'),

  maxWorkers: -1,

  moduleFileExtensions: resolveExtensions.map((ext) => trimStart(ext, '.')),

  moduleNameMapper: {
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

  rootDir: root,

  roots: ['<rootDir>', fromConfig('node/test')],

  setupFilesAfterEnv: [fromConfig('node/test/_initialize.ts')],

  testEnvironment: 'node',

  testMatch: reduce(
    extensions,
    (result, ext) => {
      const _ext = trim(ext, '.');
      return [...result, `<rootDir>/src/**/${match}.${_ext}`, `<rootDir>/src/**/_${match}.${_ext}`];
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

  transformIgnorePatterns: externals ? [`node_modules/(?!(${externals.join('|')})/)`] : [],

  watch: isWatch,
});
