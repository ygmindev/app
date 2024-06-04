import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { _typescript } from '@lib/config/node/typescript/_typescript';
import { BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import reduce from 'lodash/reduce';
import trim from 'lodash/trim';
import trimStart from 'lodash/trimStart';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

export const _test = ({
  buildDir,
  bundle,
  cacheDir,
  eteExtension,
  fileExtensions,
  isWatch,
  match,
  mockPath,
  outputDir,
  root,
  specExtension,
  timeout,
  typescript,
}: TestConfigModel): _TestConfigModel => {
  const { aliases, define, extensions, transpiles } = bundle;
  const { compilerOptions } = _typescript(typescript);
  const testExtension =
    process.env.TEST_IS_ETE === BOOLEAN_STRING.TRUE ? eteExtension : specExtension;
  return {
    cacheDirectory: fromWorking(cacheDir, outputDir),

    collectCoverage: true,

    coverageDirectory: fromWorking(buildDir, outputDir, 'coverage'),

    coverageReporters: ['lcov'],

    globals: define,

    maxWorkers: -1,

    moduleFileExtensions: extensions.map((ext) => trimStart(ext, '.')),

    moduleNameMapper: {
      ...reduce(aliases, (result, v, k) => ({ ...result, [`^${k}$`]: v }), {}),
      ...(compilerOptions?.paths
        ? pathsToModuleNameMapper(compilerOptions.paths, { prefix: fromRoot() })
        : {}),
      [`(${fileExtensions.join('|')})$`]: join(mockPath, 'file'),
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
          publicPath: fromWorking(outputDir, 'reports'),
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
          permuteString([testExtension], extensions),
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
      '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: fromWorking('tsconfig.json') }],
    },

    transformIgnorePatterns: transpiles ? [`node_modules/(?!(${transpiles.join('|')})/)`] : [],

    watch: isWatch,
  };
};
