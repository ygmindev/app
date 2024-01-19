import { type ReactElement } from 'react';
import { type PageContextBuiltInClientWithClientRouting } from 'vike/types';

import { type WebConfigModel } from '@lib/config/platform/web/web.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type RenderAppModel } from '@lib/platform/core/utils/renderApp/renderApp.models';

export type _RenderClientParamsModel = Pick<WebConfigModel, 'rootId'> & {
  initialize?(): Promise<void>;

  render(params: { context: RootContextModel; element: ReactElement }): RenderAppModel;
};

export type _RenderClientModel = (
  params: PageContextBuiltInClientWithClientRouting<FCModel> & {
    context?: RootContextModel;
    pageProps?: object;
  },
) => Promise<void>;
