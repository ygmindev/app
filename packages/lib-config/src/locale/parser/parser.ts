import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { config as configBase } from '@lib/config/locale/internationalize/internationalize.base';
import { _parser } from '@lib/config/locale/parser/_parser';
import type { ParserConfigModel, _ParserConfigModel } from '@lib/config/locale/parser/parser.models';

export const config: ParserConfigModel = {
  languages: configBase.languages,

  missingValue: 'TRANSLATION_MISSING',

  namespaceDefault: configBase.namespaceDefault,

  outputPath: fromStatic('assets/locales'),
};

export const _config: _ParserConfigModel = _parser(config);
