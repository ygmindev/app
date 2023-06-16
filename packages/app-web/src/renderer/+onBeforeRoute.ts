import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import { parseLanguageUrl } from '#lib-shared/locale/utils/parseLanguageUrl/parseLanguageUrl';

type OnBeforeRouteParamsModel = PageContextBuiltIn;

interface OnBeforeRouteModel {
  pageContext: Pick<PageContextBuiltIn, 'urlOriginal'> & ExportRenderServerParamsModel;
}

const onBeforeRoute = ({ urlOriginal }: OnBeforeRouteParamsModel): OnBeforeRouteModel => {
  const { lang, url } = parseLanguageUrl(urlOriginal);
  return { pageContext: { lang, urlOriginal: url } };
};

export default onBeforeRoute;
