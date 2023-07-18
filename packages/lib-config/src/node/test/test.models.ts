import { type Config } from '@jest/types';

import { type BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { type DimensionModel } from '#lib-frontend/core/core.models';

export type TestConfigModel = {
  bundleConfig(): BundleConfigModel;

  cachePath: string;

  dimension?: DimensionModel;

  fileExtensions: Array<string>;

  imageExtension: string;

  isWatch?: boolean;

  match?: string;

  mockPath: string;

  mocks?: Array<string | [string, () => unknown]>;

  onBeforeAll?(): Promise<void>;

  onBeforeEach?(): Promise<void>;

  onFinishAll?(): Promise<void>;

  onFinishEach?(): Promise<void>;

  outputPath: string;

  root?: string;

  testExtensions: Array<string>;

  timeout: number;
};

export type _TestConfigModel = Config.InitialOptions;
