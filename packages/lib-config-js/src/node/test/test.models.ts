import { type Config } from '@jest/types';
import { type FileConfigModel } from '@lib/config/file/file.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type TypescriptConfigModel } from '@lib/config/node/typescript/typescript.models';

export type TestConfigModel = Pick<FileConfigModel, 'buildDir' | 'cacheDir'> & {
  bundle: BundleConfigModel;

  delay: number;

  eteExtension: string;

  fileExtensions: Array<string>;

  isWatch?: boolean;

  match?: string;

  mockPath: string;

  mocks?: Array<string | [string, () => unknown]>;

  onBeforeAll?(): Promise<void>;

  onBeforeEach?(): Promise<void>;

  onFinishAll?(): Promise<void>;

  onFinishEach?(): Promise<void>;

  outputDir: string;

  root?: string;

  specExtension: string;

  timeout: number;

  typescript: TypescriptConfigModel;
};

export type _TestConfigModel = Config.InitialOptions;
