import { ConfigStaticModel } from '@lib/config/core/core.models';
import type { UserConfig } from 'i18next-parser';

export type ParserConfigParamsModel = ConfigStaticModel<{
  languages: Array<string>;

  missingValue: string;

  namespaceDefault: string;

  outputPath: string;
}>;

export type _ParserConfigModel = ConfigStaticModel<UserConfig>;
