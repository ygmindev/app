import type { ReactElement } from 'react';
import type { PageContextBuiltInClientWithServerRouting } from 'vite-plugin-ssr/types';

import type { WebConfigModel } from '#lib-config/platform/web/web.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { ExportRenderClientParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';
import type {
  CallableModel,
  CallablePromiseModel,
  ReturnTypeModel,
} from '#lib-shared/core/core.models';

export interface _ExportRendererServerParamsModel
  extends Pick<ReturnTypeModel<WebConfigModel>, 'publicDir' | 'rootId' | 'ssrContextKeys'> {
  render(params: { context?: RootContextModel } & ChildrenPropsModel): {
    element: ReactElement;
    getCss: CallableModel<ReactElement>;
  };
}

export interface _ExportRendererServerModel {
  render(
    params: PageContextBuiltInClientWithServerRouting & ExportRenderClientParamsModel,
  ): Promise<{
    documentHtml: { _template: unknown };
    pageContext: CallablePromiseModel<{ redirectTo?: string } & ExportRenderClientParamsModel>;
  }>;
}
