import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';
import type { ExportRenderClientParamsModel } from '@lib/framework/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerParamsModel } from '@lib/framework/web/exports/exportRendererServer/exportRendererServer.models';
import type { ChildrenPropsModel, FCModel } from '@lib/frontend/core/core.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';

export interface _ExportRendererServerParamsModel
  extends Pick<WebConfigParamsModel, 'publicDir' | 'rootId' | 'ssrContextKeys'> {
  render: FCModel<ChildrenPropsModel & ExportRenderServerParamsModel>;
}

export interface _ExportRendererServerModel {
  onBeforeRender?(
    params: ExportRenderServerParamsModel,
  ): Promise<{ pageContext: ExportRenderClientParamsModel }>;

  passToClient?: Array<keyof ExportRenderClientParamsModel>;

  render(
    params: {
      Page: ComponentType;
      pageProps?: object;
    } & ExportRenderServerParamsModel,
  ): Promise<{
    documentHtml: { _template: unknown };
    pageContext: CallablePromiseModel<{ redirectTo?: string } & ExportRenderClientParamsModel>;
  }>;
}
