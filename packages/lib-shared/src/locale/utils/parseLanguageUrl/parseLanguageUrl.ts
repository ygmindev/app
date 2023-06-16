import trim from 'lodash/trim';

import { config } from '#lib-config/locale/internationalize/internationalize.base';
import type {
  ParseLanguageUrlModel,
  ParseLanguageUrlParamsModel,
} from '#lib-shared/locale/utils/parseLanguageUrl/parseLanguageUrl.models';

export const parseLanguageUrl = (params: ParseLanguageUrlParamsModel): ParseLanguageUrlModel => {
  const [first, ...rest] = trim(params, '/').split('/');
  const lang = first.replace('/', '');
  return config.languages.includes(lang)
    ? { lang, url: `/${rest?.join('/')}` }
    : { lang: config.languageDefault, url: params };
};
