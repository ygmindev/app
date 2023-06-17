import type {
  _ExportPrerenderModel,
  _ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/_exportPrerender.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const _exportPrerender = ({ i18n }: _ExportPrerenderParamsModel): _ExportPrerenderModel => ({
  prerender: async () => [
    {
      pageContext: { context: { [LOCALE]: { i18n, lang: 'en' } } },
      url: '/deleteme',
    },
  ],
});
