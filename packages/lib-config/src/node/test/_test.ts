import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import type { _TestConfigModel, TestConfigModel } from '@lib/config/node/test/_test.models';
import { compilerOptions } from '@lib/config/node/typescript/tsconfig.paths.json';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { mapKeys, reduce, trim, trimStart } from 'lodash';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

const _testConfig: _TestConfigModel = async () => {
  const {
    cachePath,
    coverageOutputPath,
    fileExtensions,
    isWatch,
    match,
    mockPath,
    root,
    testExtensions,
    timeout,
  } = await importConfig<TestConfigModel>('node/test/test');
  const _babelConfig = await importConfig<TestConfigModel>('node/babel/babel');
  const _bundleConfig = await importConfig<BundleConfigModel>('node/bundle/bundle');
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
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.(ts|tsx)$': ['ts-jest', { babelConfig: _babelConfig, tsconfig: fromWorking('tsconfig.json') }],
    },

    transformIgnorePatterns: _bundleConfig.externals
      ? [`node_modules/(?!(${_bundleConfig.externals.join('|')})/)`]
      : [],

    watch: isWatch,
  };
};

export default _testConfig;
