import type { ReactElement } from 'react';
import type { PageContextBuiltInClientWithClientRouting } from 'vite-plugin-ssr/types';

import type { WebConfigModel } from '#lib-config/platform/web/web.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { ExportRenderClientParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';

export interface _ExportRendererClientParamsModel
  extends Pick<ReturnTypeModel<WebConfigModel>, 'rootId'> {
  render(params: { context?: RootContextModel } & ChildrenPropsModel): { element: ReactElement };
}

export interface _ExportRendererClientModel {
  render(
    params: PageContextBuiltInClientWithClientRouting & ExportRenderClientParamsModel,
  ): Promise<void>;
}
