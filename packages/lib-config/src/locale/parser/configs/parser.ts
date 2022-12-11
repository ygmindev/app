import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { internationalizeConfig } from '@lib/config/locale/internationalize/configs/internationalize';
import type { ParserConfigParamsModel } from '@lib/config/locale/parser/parser.models';

export const parserConfig: ParserConfigParamsModel = {
  languages: internationalizeConfig.languages,

  missingValue: 'TRANSLATION_MISSING',

  namespaceDefault: internationalizeConfig.namespaceDefault,

  outputPath: fromStatic('assets/locales'),
};
