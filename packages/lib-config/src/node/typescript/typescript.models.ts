import { type FileConfigModel } from '@lib/config/file/file.models';
import { type CreateOptions } from 'ts-node';
import { type TranspileOptions } from 'typescript';

export type TypescriptConfigModel = Pick<FileConfigModel, 'distDir'> & {
  configFilename: string;

  paths?: Record<string, string>;

  rootDir: string;

  types?: Array<string>;
};

export type _TypescriptConfigModel = TranspileOptions & {
  'ts-node': CreateOptions;
};
