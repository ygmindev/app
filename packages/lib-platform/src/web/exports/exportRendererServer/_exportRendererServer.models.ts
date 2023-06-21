import type { ReactElement } from 'react';
import type { PageContextBuiltInClientWithServerRouting } from 'vite-plugin-ssr/types';

import type { WebConfigModel } from '#lib-config/platform/web/web.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { ExportRenderClientRenderParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';
import type {
  CallableModel,
  CallablePromiseModel,
  ReturnTypeModel,
} from '#lib-shared/core/core.models';

export type _ExportRendererServerParamsModel = {
  render(params: { context?: RootContextModel } & ChildrenPropsModel): {
    element: ReactElement;
    getCss: CallableModel<ReactElement>;
  };
} & Pick<ReturnTypeModel<WebConfigModel>, 'publicDir' | 'rootId' | 'ssrContextKeys'>;

export type _ExportRendererServerModel = {
  render(params: _PageContextModel): Promise<{
    documentHtml: { _template: unknown };
    pageContext: _PageContextResultModel | CallablePromiseModel<_PageContextResultModel>;
  }>;
};

type _PageContextModel = PageContextBuiltInClientWithServerRouting &
  ExportRenderClientRenderParamsModel;

type _PageContextResultModel = { redirectTo?: string } & ExportRenderClientRenderParamsModel;
