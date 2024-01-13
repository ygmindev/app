import { type Config } from '@jest/types';

import { type BundleConfigModel } from '@lib-config/node/bundle/bundle.models';
import { type DimensionModel } from '@lib-frontend/core/core.models';

export type TestConfigModel = {
  bundleConfig(): BundleConfigModel;

  cachePath: string;

  delay: number;

  dimension?: DimensionModel;

  eteExtension: string;

  fileExtensions: Array<string>;

  isBrowser?: boolean;

  isWatch?: boolean;

  match?: string;

  mockDir: string;

  mocks?: Array<string | [string, () => unknown]>;

  onBeforeAll?(): Promise<void>;

  onBeforeEach?(): Promise<void>;

  onFinishAll?(): Promise<void>;

  onFinishEach?(): Promise<void>;

  outputPath: string;

  root?: string;

  snapshotPath: string;

  snapshotPrefix: string;

  specExtension: string;

  timeout: number;
};

export type _TestConfigModel = Config.InitialOptions;
