import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import { _config } from '#lib-config/locale/internationalize/internationalize.node';
import type { ExportRenderServerParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

const onBeforePrerenderStart = async (
  _pageContext: PageContextBuiltIn,
): Promise<Array<{ pageContext: ExportRenderServerParamsModel; url: string }>> => {
  const i18n = _config();
  return [
    {
      pageContext: { context: { [LOCALE]: { i18n, lang: 'en' } } },
      url: '/deleteme',
    },
  ];
};

export default onBeforePrerenderStart;
