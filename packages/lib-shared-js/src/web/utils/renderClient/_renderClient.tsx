import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { cookies } from '@lib/frontend/http/utils/cookies/cookies';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { STATE } from '@lib/shared/state/state.constants';
import {
  type _RenderClientModel,
  type _RenderClientParamsModel,
} from '@lib/shared/web/utils/renderClient/_renderClient.models';
import { type ComponentType } from 'react';
import { hydrateRoot } from 'react-dom/client';

export const _renderClient =
  ({
    initialize,
    internationalizeConfig,
    render,
    rootId,
  }: _RenderClientParamsModel): _RenderClientModel =>
  async ({ Page, context, pageProps }) => {
    await initialize?.();
    const contextF: RootContextModel = merge([
      {
        [LOCALE]: { i18n: context?.[LOCALE]?.i18n ?? _internationalize(internationalizeConfig) },
        [STATE]: { cookies },
      },
      context,
    ]);
    const PageF = Page as ComponentType;
    const { element } = render({ context: contextF, element: <PageF {...pageProps} /> });
    const root = document.getElementById(rootId);
    root && hydrateRoot(root, element);
  };
