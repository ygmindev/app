import type {
  _ExportRendererClientModel,
  _ExportRendererClientParamsModel,
} from '@lib/platform/web/exports/exportRendererClient/_exportRendererClient.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { CookiesModel } from '@lib/frontend/state/state.models';
import { STATE } from '@lib/shared/state/state.constants';
import Cookies from 'cookies-js';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { AppRegistry } from 'react-native-web';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { _config } from '@lib/config/locale/internationalize/internationalize.web';

export const _exportRendererClient = ({
  render,
  rootId,
}: _ExportRendererClientParamsModel): _ExportRendererClientModel => ({
  render: async ({ Page, context, isHydration, pageProps }) => {
    const root = document.getElementById(rootId);
    const _context: RootContextModel = merge([
      {
        [LOCALE]: { i18n: context?.locale?.i18n ?? _config() },
        [STATE]: { cookies: Cookies as unknown as CookiesModel },
      },
      context
    ]);

    const App: FCModel = () => render({ children: <Page {...pageProps} />, context: _context });
    AppRegistry.registerComponent('App', () => App);
    const { element } = AppRegistry.getApplication('App', {});

    root && (isHydration ? hydrateRoot(root, element) : createRoot(root).render(element));
  },
});
