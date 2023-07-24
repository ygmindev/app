import { type ReactElement } from 'react';
import { type PageContextBuiltInClientWithClientRouting } from 'vite-plugin-ssr/types';

import { type WebConfigModel } from '#lib-config/platform/web/web.models';
import { type RootContextModel } from '#lib-frontend/root/root.models';
import { type RenderAppModel } from '#lib-platform/core/utils/renderApp/renderApp.models';

export type _RenderClientParamsModel = Pick<WebConfigModel, 'rootId'> & {
  initialize?(): Promise<void>;

  render(params: { context: RootContextModel; element: ReactElement }): RenderAppModel;
};

export type _RenderClientModel = {
  render(
    params: PageContextBuiltInClientWithClientRouting & {
      context?: RootContextModel;
      pageProps?: object;
    },
  ): Promise<void>;
};
