import { type ReactElement } from 'react';
import { type PageContextBuiltInClientWithClientRouting } from 'vite-plugin-ssr/types';

import { type WebConfigModel } from '#lib-config/platform/web/web.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type RootContextModel } from '#lib-frontend/root/root.models';
import { type ExportRenderClientRenderParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';

export type _ExportRendererClientParamsModel = {
  render(params: { context?: RootContextModel } & ChildrenPropsModel): { element: ReactElement };
} & Pick<WebConfigModel, 'rootId'>;

export type _ExportRendererClientModel = {
  render(params: _PageContextModel): Promise<void>;
};

type _PageContextModel = PageContextBuiltInClientWithClientRouting &
  ExportRenderClientRenderParamsModel;
