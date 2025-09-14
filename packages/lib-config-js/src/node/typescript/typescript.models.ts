import { type TranspileOptions } from 'typescript';

export type TypescriptConfigModel = {
  configFilename: string;

  outPathname: string;

  paths?: Record<string, string>;

  rootDir: string;

  types?: Array<string>;
};

export type _TypescriptConfigModel = TranspileOptions;
