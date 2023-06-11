import { _config } from '@lib/config/locale/internationalize/internationalize';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { CookiesModel } from '@lib/frontend/state/state.models';
import { renderApp } from '@lib/platform/core/utils/renderApp/renderApp';
import type {
  _ExportRendererClientModel,
  _ExportRendererClientParamsModel,
} from '@lib/platform/web/exports/exportRendererClient/_exportRendererClient.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { STATE } from '@lib/shared/state/state.constants';
import Cookies from 'cookies-js';
import { createRoot, hydrateRoot } from 'react-dom/client';

export const _exportRendererClient = ({
  additionalProviders,
  rootId,
}: _ExportRendererClientParamsModel): _ExportRendererClientModel => ({
  render: async ({ Page, context, isHydration, pageProps }) => {
    const contextF: RootContextModel = merge([
      {
        [LOCALE]: { i18n: context?.locale?.i18n ?? _config() },
        [STATE]: { cookies: Cookies as unknown as CookiesModel },
      },
      context,
    ]);
    const { element } = renderApp({
      additionalProviders: additionalProviders ? additionalProviders(contextF) : undefined,
      children: <Page {...pageProps} />,
      context: contextF,
    });
    const root = document.getElementById(rootId);
    root && (isHydration ? hydrateRoot(root, element) : createRoot(root).render(element));
  },
});
