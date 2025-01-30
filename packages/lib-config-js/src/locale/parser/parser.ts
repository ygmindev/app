import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import { _parser } from '@lib/config/locale/parser/_parser';
import {
  type _ParserConfigModel,
  type ParserConfigModel,
} from '@lib/config/locale/parser/parser.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { languages } = INTERNATIONALIZE_CONFIG;

export const config = defineConfig<ParserConfigModel, _ParserConfigModel>({
  config: _parser,

  params: () => ({
    distDir: fromStatic('assets/locales'),

    languages: languages.map(({ id }) => id),

    missingValue: 'TRANSLATION_MISSING',
  }),
});

export default config;
