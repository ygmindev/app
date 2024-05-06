import { _config } from '@lib/config/locale/internationalize/internationalize.web';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type CookiesModel } from '@lib/frontend/state/state.models';
import {
  type _RenderClientModel,
  type _RenderClientParamsModel,
} from '@lib/platform/web/exports/renderClient/_renderClient.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { STATE } from '@lib/shared/state/state.constants';
import Cookies from 'cookies-js';
import { hydrateRoot } from 'react-dom/client';

export const _renderClient =
  ({ initialize, render, rootId }: _RenderClientParamsModel): _RenderClientModel =>
  async ({ Page, context, pageProps }) => {
    initialize && (await initialize());
    const contextF: RootContextModel = merge([
      {
        [LOCALE]: { i18n: context?.locale?.i18n ?? _config() },
        [STATE]: { cookies: Cookies as unknown as CookiesModel },
      },
      context,
    ]);
    const { element } = render({ context: contextF, element: <Page {...pageProps} /> });
    const root = document.getElementById(rootId);
    root && hydrateRoot(root, element);
  };
