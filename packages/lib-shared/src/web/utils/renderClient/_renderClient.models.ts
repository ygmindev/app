import { type WebConfigModel } from '@lib/config/web/web.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type RenderAppModel } from '@lib/shared/web/utils/renderApp/renderApp.models';
import { type ComponentType, type ReactElement } from 'react';
import { type PageContextClient } from 'vike/types';

export type _RenderClientParamsModel = Pick<WebConfigModel, 'rootId'> & {
  initialize?(): Promise<void>;

  render(params: { context: RootContextModel; element: ReactElement }): RenderAppModel;
};

export type _RenderClientModel = (
  params: PageContextClient<FCModel> & {
    Page: ComponentType<unknown>;
    context?: RootContextModel;
    pageProps?: object;
  },
) => Promise<void>;
