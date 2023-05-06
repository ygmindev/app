import type { UserConfig } from 'i18next-parser';

export interface _ParserConfigParamsModel {
  languages: Array<string>;

  missingValue: string;

  namespaceDefault: string;

  outputPath: string;
}

export type _ParserConfigModel = UserConfig;
