import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import { _parser } from '@lib/config/locale/parser/_parser';
import { type ParserConfigModel } from '@lib/config/locale/parser/parser.models';

const { languages } = INTERNATIONALIZE_CONFIG;

import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _parser,

  config: {
    distDir: fromStatic('assets/locales'),

    languages: languages.map(({ id }) => id),

    missingValue: 'TRANSLATION_MISSING',
  } satisfies ParserConfigModel,
});

export { _config, config };
