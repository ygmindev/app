import mapKeys from 'lodash/mapKeys';
import reduce from 'lodash/reduce';
import trim from 'lodash/trim';
import trimStart from 'lodash/trimStart';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { type _TestConfigModel, type TestConfigModel } from '#lib-config/node/test/test.models';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { joinExtension } from '#lib-shared/core/utils/joinExtension/joinExtension';

import { compilerOptions } from '../../../../../.build/tsconfig.json';

export const _test = ({
  bundleConfig,
  cachePath,
  fileExtensions,
  isWatch,
  match,
  mockPath,
  outputPath,
  root,
  testExtensions,
  timeout,
}: TestConfigModel): _TestConfigModel => {
  const bundleConfigF = bundleConfig();
  return {
    cacheDirectory: cachePath,

    collectCoverage: true,

    coverageDirectory: join(outputPath, 'coverage'),

    coverageReporters: ['lcov'],

    globals: bundleConfigF.define,

    maxWorkers: -1,

    moduleFileExtensions: bundleConfigF.extensions.map((ext) => trimStart(ext, '.')),

    moduleNameMapper: {
      ...mapKeys(bundleConfigF.aliases, (k) => `^${k}$`),
      ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: fromRoot() }),
      [`\\.(${fileExtensions.join('|')})$`]: join(mockPath, 'file'),
    },

    passWithNoTests: true,

    preset: 'ts-jest',

    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          darkTheme: true,
          openReport: process.env.NODE_ENV === 'test',
          publicPath: outputPath,
        },
      ],
    ],

    resolver: fromConfig('node/test/_resolver.js'),

    rootDir: root ?? fromRoot(),

    roots: ['<rootDir>', fromRoot(), fromConfig('node/test')],

    setupFilesAfterEnv: [fromConfig('node/test/_initialize.ts')],

    testEnvironment: process.env.ENV_PLATFORM === PLATFORM.WEB ? 'jsdom' : 'node',

    testMatch: reduce(
      testExtensions,
      (result, ext) => {
        const extF = trim(ext, '.');
        return [
          ...result,
          joinExtension(`<rootDir>/src/**/${match ?? '*'}`, extF),
          joinExtension(`<rootDir>/src/**/_${match ?? '*'}`, extF),
        ];
      },
      [] as Array<string>,
    ),

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
