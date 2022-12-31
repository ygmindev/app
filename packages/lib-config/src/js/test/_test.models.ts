import type { BundleConfigParamsModel } from '@lib/config/js/bundle/bundle.models';

export interface _TestConfigParamsModel {
  bundle: BundleConfigParamsModel;
  cachePath: string;
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
