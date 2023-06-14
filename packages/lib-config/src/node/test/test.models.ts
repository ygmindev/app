import type { Config } from '@jest/types';

import type { ConfigDynamicModel } from '#lib-config/core/core.models';
import type { BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import type { CallableModel, CallablePromiseModel } from '#lib-shared/core/core.models';

export type TestConfigModel = ConfigDynamicModel<{
  bundleConfig: BundleConfigModel;

  cachePath: string;

  coverageOutputPath: string;

  fileExtensions: Array<string>;

  isWatch?: boolean;

  match: string;

  mockPath: string;

  mocks?: Array<string | [string, CallableModel<unknown>]>;

  onAfterAll?: CallablePromiseModel;

  onAfterEach?: CallablePromiseModel;

  onBeforeAll?: CallablePromiseModel;

  onBeforeEach?: CallablePromiseModel;

  root: string;

  testExtensions: Array<string>;

  timeout: number;
}>;

export type _TestConfigModel = ConfigDynamicModel<Config.InitialOptions>;
