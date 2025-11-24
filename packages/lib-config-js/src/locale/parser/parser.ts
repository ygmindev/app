import { fromPublic } from '@lib/backend/file/utils/fromPublic/fromPublic';
import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { LANGUAGES } from '@lib/config/locale/internationalize/internationalize.constants';
import { _parser } from '@lib/config/locale/parser/_parser';
import {
  type _ParserConfigModel,
  type ParserConfigModel,
} from '@lib/config/locale/parser/parser.models';
import { Config } from '@lib/config/utils/Config/Config';

export const parserConfig = new Config<ParserConfigModel, _ParserConfigModel>({
  config: _parser,

  params: () => ({
    distDir: fromPublic(ASSETS_DIR, 'locales'),

    languages: LANGUAGES.map(({ id }) => id),

    missingValue: 'TRANSLATION_MISSING',
  }),
});
