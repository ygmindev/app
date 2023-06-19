import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import type {
  _ExportRouteModel,
  _ExportRouteParamsModel,
} from '#lib-platform/web/exports/exportRoute/_exportRoute.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { parseLanguageUrl } from '#lib-shared/locale/utils/parseLanguageUrl/parseLanguageUrl';
import { ROUTE } from '#lib-shared/route/route.constants';

export const _exportRoute = ({}: _ExportRouteParamsModel): _ExportRouteModel => ({
  route: ({ context, urlOriginal }) => {
    const { lang, url } = parseLanguageUrl(urlOriginal);
    return {
      pageContext: {
        context: merge([
          { [LOCALE]: { lang }, [ROUTE]: { location: { pathname: trimPathname(url) } } },
          context,
        ]),
        urlOriginal: url,
      },
    };
  },
});
