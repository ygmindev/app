import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';
import { type WebConfigModel } from '@lib/config/node/web/web.models';
import { type RootContextModel, type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type RenderAppModel } from '@lib/shared/web/utils/renderApp/renderApp.models';
import { type ReactElement } from 'react';
import { type PageContextClient } from 'vike/types';

export type _RenderClientParamsModel = Pick<WebConfigModel, 'rootId'> & {
  initialize?(): Promise<void>;

  internationalizeConfig: InternationalizeConfigModel;

  render(params: { context: RootContextModel; element: ReactElement }): RenderAppModel;
};

export type _RenderClientModel = (
  params: PageContextClient & RootContextPropsModel & { pageProps?: object },
) => Promise<void>;
