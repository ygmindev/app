import type { Config } from '@jest/types';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { compilerOptions } from '@lib/config/javascript/typescript/tsconfig.paths.json';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { mapKeys, reduce, trim, trimStart } from 'lodash';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

export const _testConfig = ({
  bundle,
  cachePath,
  coverageOutputPath,
  fileExtensions,
  isWatch,
  match,
  mockPath,
  root,
  timeout,
}: _TestConfigParamsModel): Config.InitialOptions => ({
  cacheDirectory: cachePath,

  collectCoverage: true,

  coverageDirectory: coverageOutputPath,

  coverageReporters: ['lcov'],

  globalTeardown: fromConfig(`node/test/_cleanup.${bundle.platform}.config.ts`),

  globals: bundle.define,

  maxWorkers: -1,

  moduleDirectories: bundle.modulePaths,

  moduleFileExtensions: bundle.extensions.map((ext) => trimStart(ext, '.')),

  moduleNameMapper: {
    ...mapKeys(bundle.aliases, (k) => `^${k}$`),
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

  setupFilesAfterEnv: [fromConfig(`node/test/_initialize.${bundle.platform}.config.ts`)],

  testEnvironment: bundle.platform === PLATFORM.WEB ? 'jsdom' : 'node',

  testMatch: reduce(
    bundle.extensions,
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

  transformIgnorePatterns: bundle.externals
    ? [`node_modules/(?!(${bundle.externals.join('|')})/)`]
    : [],

  watch: isWatch,
});
