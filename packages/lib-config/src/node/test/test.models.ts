import { type Config } from '@jest/types';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type TestConfigModel = Pick<ScreenConfigModel, 'idSelector'> & {
  bundleConfig(): BundleConfigModel;

  cachePath: string;

  delay: number;

  eteExtension: string;

  fileExtensions: Array<string>;

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
