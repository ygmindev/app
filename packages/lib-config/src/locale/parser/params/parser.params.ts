import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { internationalizeConfigParams } from '@lib/config/locale/internationalize/params/internationalize.params.base';
import type { _ParserConfigParamsModel } from '@lib/config/locale/parser/_parser.models';

export const parserConfigParams: _ParserConfigParamsModel = {
  languages: internationalizeConfigParams.languages,

  missingValue: 'TRANSLATION_MISSING',

  namespaceDefault: internationalizeConfigParams.namespaceDefault,

  outputPath: fromStatic('assets/locales'),
};
