import { type Config } from '@jest/types';

import { type BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import {
  type OptionalCallableModel,
  type OptionalCallablePromiseModel,
  type PartialDeepModel,
} from '#lib-shared/core/core.models';

export type TestConfigModel = {
  bundleConfig: OptionalCallableModel<BundleConfigModel, PartialDeepModel<BundleConfigModel>>;

  cachePath: string;

  coverageOutputPath: string;

  fileExtensions: Array<string>;

  isWatch?: boolean;

  match?: string;

  mockPath: string;

  mocks?: Array<string | [string, OptionalCallableModel<unknown>]>;

  onAfterAll?: OptionalCallablePromiseModel;

  onAfterEach?: OptionalCallablePromiseModel;

  onBeforeAll?: OptionalCallablePromiseModel;

  onBeforeEach?: OptionalCallablePromiseModel;

  root?: string;

  testExtensions: Array<string>;

  timeout: number;
};

export type _TestConfigModel = Config.InitialOptions;
