import type { GlobalsConfigModels } from '@lib/config/globals/globals.config.models';

export interface WebpackLoaderModel {
  loader: string;
  options?: object;
}

export interface WebpackParamsModel {
  entry?: Record<string, string | string[]>;
  globals: Partial<GlobalsConfigModels>;
  loader?: WebpackLoaderModel;
  transpile?: Array<string | RegExp>;
}
