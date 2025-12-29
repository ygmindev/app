import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { _typescript } from '@lib/config/node/typescript/_typescript';
import { BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';
import { Container } from '@lib/shared/core/utils/Container/Container';
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
  outDir,
  root,
  specExtension,
  timeout,
  typescript,
}: TestConfigModel): _TestConfigModel => {
  const environment = Container.get(Environment);
  const { aliases, define, extensions, transpileModules } = bundle;
  const { compilerOptions } = _typescript(typescript);

  const testExtension =
    environment.variables.TEST_IS_ETE === BOOLEAN_STRING.TRUE ? eteExtension : specExtension;

  return {
    cacheDirectory: fromWorking(BUILD_DIR, cacheDir, outDir),

    collectCoverage: true,

    coverageDirectory: fromWorking(BUILD_DIR, outDir, 'coverage'),

    coverageReporters: ['lcov'],

    detectOpenHandles: true,

    forceExit: true,

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

    preset: 'ts-jest',

    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          darkTheme: true,
          openReport: false,
          publicPath: fromWorking(BUILD_DIR, outDir, 'reports'),
        },
      ],
    ],

    resolver: fromConfig('node/test/_resolver.js'),

    rootDir: root ?? fromRoot(),

    roots: ['<rootDir>', fromRoot(), fromConfig('node/test')],

    setupFilesAfterEnv: [fromConfig('node/test/_initialize.ts')],

    testEnvironment: environment.variables.ENV_PLATFORM === PLATFORM.WEB ? 'jsdom' : 'node',

    testMatch: testExtension
      ? reduce(
          cartesianString([testExtension], extensions),
          (result, ext) => {
            const extF = trim(ext, '.');
            return [
              ...result,
              joinPaths([`<rootDir>/tests/**/${match || '*'}*`], { extension: extF }),
              joinPaths([`<rootDir>/tests/**/_${match || '*'}*`], { extension: extF }),
            ];
          },
          [] as Array<string>,
        )
      : [],

    testTimeout: timeout,

    transform: {
      '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: fromWorking('tsconfig.json') }],
    },

    transformIgnorePatterns: transpileModules
      ? [`node_modules/(?!(${transpileModules.join('|')})/)`]
      : [],

    watch: isWatch,
  };
};
