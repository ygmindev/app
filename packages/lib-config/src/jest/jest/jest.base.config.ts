import type { Config } from '@jest/types';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { compilerOptions } from '@lib/config/typescript/tsconfig.paths.json';
import { NODE_EXTENSIONS, PACKAGE_PREFIXES } from '@lib/shared/file/file.constants';
import { some, trimStart } from 'lodash';

const paths = compilerOptions.paths as Record<string, Array<string>>;

export const jestConfig: Config.InitialOptions = {
  cacheDirectory: fromWorking('.cache/jest'),

  collectCoverage: true,

  coverageReporters: ['lcov'],

  globals: {
    __NAME__: 'TEST',
  },

  maxWorkers: -1,

  moduleFileExtensions: NODE_EXTENSIONS.map((ext) => trimStart(ext, '.')),

  moduleNameMapper: Object.keys(paths).reduce(
    (result, k) =>
      some(PACKAGE_PREFIXES.map((prefix) => k.startsWith(`@${prefix}`)))
        ? {
            ...result,
            [k.replace('/*', '/(.+)')]: paths[k].map((v) => fromRoot(v.replace('/*', '/$1'))),
          }
        : result,
    {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${fromConfig(
        'jest/__mocks__/file',
      )}`,
    },
  ),

  passWithNoTests: true,

  preset: 'ts-jest',

  roots: ['<rootDir>', fromConfig('jest')],

  setupFilesAfterEnv: [fromConfig('jest/setupFilesAfterEnv/setupFilesAfterEnv.base.ts')],

  testEnvironment: 'node',

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { babelConfig: fromWorking('babel.config.js'), tsconfig: fromWorking('tsconfig.json') },
    ],
  },
};
