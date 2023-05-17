import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import internationalizeConfig from '@lib/config/locale/internationalize/internationalize.base';
import type { ParserConfigParamsModel } from '@lib/config/locale/parser/_parser.models';

const parserConfig: ParserConfigParamsModel = {
  languages: internationalizeConfig.languages,

  missingValue: 'TRANSLATION_MISSING',

  namespaceDefault: internationalizeConfig.namespaceDefault,

  outputPath: fromStatic('assets/locales'),
};

export default parserConfig;
