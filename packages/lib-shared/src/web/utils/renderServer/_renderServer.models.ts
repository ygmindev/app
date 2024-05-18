import { type WebConfigModel } from '@lib/config/platform/web/web.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type RenderAppModel } from '@lib/shared/platform/utils/renderApp/renderApp.models';
import { type ComponentType, type ReactElement } from 'react';
import { type PageContextClientWithServerRouting as PageContextClient } from 'vike/types';

export type _RenderServerParamsModel = Pick<
  WebConfigModel,
  'publicPath' | 'rootId' | 'ssrContextKeys'
> & {
  initialize?(): Promise<void>;

  render(params: { context: RootContextModel; element: ReactElement }): RenderAppModel;
};

export type _RenderServerModel = (
  params: PageContextClient<FCModel> & {
    Page: ComponentType<unknown>;
    context?: RootContextModel;
    pageProps?: object;
  },
) => Promise<{
  documentHtml: { _template: unknown };
  pageContext(): Promise<{ context?: RootContextModel; pageProps?: object; redirectTo?: string }>;
}>;
