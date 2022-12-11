import type { Config } from '@jest/types';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _TestConfigParamsModel } from '@lib/config/node/test/_test.models';
import { compilerOptions } from '@lib/config/node/typescript/tsconfig.paths.json';
import { PACKAGE_PREFIXES } from '@lib/shared/file/file.constants';
import { reduce, some, trim, trimStart } from 'lodash';
import { join } from 'path';

const paths = compilerOptions.paths as Record<string, Array<string>>;

export const _testConfig = ({
  cachePath,
  coverageOutputPath,
  extensions,
  externals,
  isWatch,
  match = '*',
  mockPath,
  resolveExtensions,
  root,
  timeout,
}: _TestConfigParamsModel): Config.InitialOptions => ({
  cacheDirectory: cachePath,

  collectCoverage: true,

  coverageDirectory: coverageOutputPath,

  coverageReporters: ['lcov'],

  globalTeardown: fromConfig('test/_cleanup.ts'),

  maxWorkers: -1,

  moduleFileExtensions: resolveExtensions.map((ext) => trimStart(ext, '.')),

  moduleNameMapper: Object.keys(paths).reduce(
    (result, k) =>
      some(PACKAGE_PREFIXES.map((prefix) => k.startsWith(`@${prefix}`)))
        ? {
            ...result,
            [k.replace('/*', '/(.+)')]: paths[k].map((v) => fromRoot(v.replace('/*', '/$1'))),
          }
        : result,
    {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': join(
        mockPath,
        'file',
      ),
    },
  ),

  passWithNoTests: true,

  preset: 'ts-jest',

  rootDir: root,

  roots: ['<rootDir>', fromConfig('test')],

  setupFilesAfterEnv: [fromConfig('test/_initialize.ts')],

  testEnvironment: 'node',

  testMatch: reduce<string, Array<string>>(
    extensions,
    (result, ext) => {
      const _ext = trim(ext, '.');
      return [...result, `<rootDir>/src/**/${match}.${_ext}`, `<rootDir>/src/**/_${match}.${_ext}`];
    },
    [],
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
