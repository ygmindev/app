import type {
  _ExportRouteModel,
  _ExportRouteParamsModel,
} from '#lib-platform/web/exports/exportRoute/_exportRoute.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { parseLanguageUrl } from '#lib-shared/locale/utils/parseLanguageUrl/parseLanguageUrl';

export const _exportRoute = ({}: _ExportRouteParamsModel): _ExportRouteModel => ({
  route: ({ urlOriginal }) => {
    const { lang, url } = parseLanguageUrl(urlOriginal);
    return { pageContext: { context: { [LOCALE]: { lang } }, urlOriginal: url } };
  },
});
