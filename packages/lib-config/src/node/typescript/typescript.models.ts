import { type CreateOptions } from 'ts-node';
import { type TranspileOptions } from 'typescript';

export type TypescriptConfigModel = {
  configFile: string;

  outDir: string;

  paths?: Record<string, string>;

  rootDir: string;

  types?: Array<string>;
};

export type _TypescriptConfigModel = {
  'ts-node': CreateOptions;
} & TranspileOptions;
