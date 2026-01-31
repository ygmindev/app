import { internationalizeConfig } from '@lib/config/locale/internationalize/internationalize.node';
import { _onPrerender } from '@lib/config/node/framework/onPrerender/_onPrerender';
import {
  type onPrerenderModel,
  type onPrerenderParamsModel,
} from '@lib/config/node/framework/onPrerender/onPrerender.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { ROUTE } from '@lib/shared/route/route.constants';

export const onPrerender = (params: onPrerenderParamsModel): onPrerenderModel => {
  const { languageDefault, languages } = internationalizeConfig.params();
  const i18n = internationalizeConfig.config();
  return _onPrerender({
    getContext: async ({ context, lang, pathname }) => {
      await i18n.changeLanguage(lang);
      const isLanguageDefault = lang === languageDefault;
      return {
        context: merge([
          {
            [LOCALE]: { i18n, lang },
            [ROUTE]: { location: { pathname: trimPathname(pathname) } },
          },
          context,
        ]),
        pathname: trimPathname(isLanguageDefault ? pathname : `/${lang}/${pathname}`),
      };
    },

    languages,
  });
};
