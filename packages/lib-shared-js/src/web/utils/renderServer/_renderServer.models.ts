import { type InitializeModel } from '@app/web/setup/utils/initialize/initialize.models';
import { type WebConfigModel } from '@lib/config/node/web/web.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { type RenderAppModel } from '@lib/shared/web/utils/renderApp/renderApp.models';
import { type TemplateWrapped } from 'node_modules/vike/dist/esm/node/runtime/html/renderHtml';
import { type ReactElement } from 'react';
import { type PageContextServer } from 'vike/types';

export type _RenderServerParamsModel = Pick<WebConfigModel, 'rootId' | 'ssrContextKeys'> & {
  initialize?(): Promise<InitializeModel>;

  render(params: { context: RootContextModel; element: ReactElement }): RenderAppModel;

  routes?: Array<RouteModel>;
};

export type _RenderServerModel = (
  params: PageContextServer & {
    context?: RootContextModel;
    pageProps?: object;
  },
) => Promise<{
  documentHtml: TemplateWrapped;
  pageContext(): Promise<{
    context?: RootContextModel;
    enableEagerStreaming: boolean;
    pageProps?: object;
    redirectTo?: string;
  }>;
}>;
