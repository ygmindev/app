import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';

export interface _TestConfigParamsModel {
  bundle: BundleConfigParamsModel;
  cachePath: string;
  command: string;
  configFile: string;
  coverageOutputPath: string;
  fileExtensions: Array<string>;
  isWatch?: boolean;
  match: string;
  mockPath: string;
  root: string;
  testExtensions: Array<string>;
  timeout: number;
}
