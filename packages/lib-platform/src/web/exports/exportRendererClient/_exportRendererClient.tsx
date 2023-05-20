import type {
  _ExportRendererClientModel,
  _ExportRendererClientParamsModel,
} from 'packages/lib-platform/src/web/exports/exportRendererClient/_exportRendererClient.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { CookiesModel } from '@lib/frontend/state/state.models';
import { STATE } from '@lib/shared/state/state.constants';
import Cookies from 'cookies-js';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { AppRegistry } from 'react-native-web';

import * as x from 'react-dom';

export const _exportRendererClient = ({
  render,
  rootId,
}: _ExportRendererClientParamsModel): _ExportRendererClientModel => ({
  render: async ({ Page, context, isHydration, pageProps }) => {
    console.warn(`\n\n@@@ ${Object.keys(x)}\n\n`);

    const root = document.getElementById(rootId);

    const _context: RootContextModel = {
      ...context,
      [STATE]: { cookies: Cookies as unknown as CookiesModel },
    };

    const App: FCModel = () => render({ children: <Page {...pageProps} />, context: _context });
    AppRegistry.registerComponent('App', () => App);
    const { element } = AppRegistry.getApplication('App', {});

    root && (isHydration ? hydrateRoot(root, element) : createRoot(root).render(element));
  },
});
