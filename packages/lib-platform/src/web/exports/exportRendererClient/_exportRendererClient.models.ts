import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { ReactElement } from 'react';
import type { PageContextBuiltInClientWithClientRouting } from 'vite-plugin-ssr/types';

import type { WebConfigModel } from '#lib-config/platform/web/web.models';
import type { ExportRenderClientParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';

export interface _ExportRendererClientParamsModel extends Pick<WebConfigModel, 'rootId'> {
  render(params: { context?: RootContextModel } & ChildrenPropsModel): { element: ReactElement };
}

export interface _ExportRendererClientModel {
  render(
    params: PageContextBuiltInClientWithClientRouting & ExportRenderClientParamsModel,
  ): Promise<void>;
}
