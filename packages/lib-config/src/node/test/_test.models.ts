import type { BundleConfigParamsModel } from '@lib/config/node/bundle/bundle.models';

export interface _TestConfigParamsModel
  extends Pick<
    BundleConfigParamsModel,
    'aliases' | 'define' | 'extensions' | 'externals' | 'platform'
  > {
  cachePath: string;
  coverageOutputPath: string;
  fileExtensions: Array<string>;
  isWatch?: boolean;
  match: string;
  mockPath: string;
  resolveExtensions: Array<string>;
  root: string;
  timeout: number;
}
