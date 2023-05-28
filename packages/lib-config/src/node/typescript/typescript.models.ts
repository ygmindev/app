import type { CreateOptions } from 'ts-node';
import type { TranspileOptions } from 'typescript';

export interface TypescriptConfigModel {
  configFile: string;

  outDir: string;

  paths?: Record<string, string>;

  rootDir: string;

  types?: Array<string>;
}

export interface _TypescriptConfigModel extends TranspileOptions {
  'ts-node': CreateOptions;
}
