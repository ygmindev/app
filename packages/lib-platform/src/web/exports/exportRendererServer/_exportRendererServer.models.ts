import type { WebConfigModel } from '@lib/config/platform/web/web.models';
import type { _ExportRendererClientParamsModel } from '@lib/platform/web/exports/exportRendererClient/_exportRendererClient.models';
import type { ExportRenderClientParamsModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerParamsModel } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { PageContextBuiltInClientWithServerRouting } from 'vite-plugin-ssr/types';

export interface _ExportRendererServerParamsModel
  extends Pick<WebConfigModel, 'publicDir' | 'rootId' | 'ssrContextKeys'>,
    Pick<_ExportRendererClientParamsModel, 'additionalProviders'> {}

export interface _ExportRendererServerModel {
  onBeforeRender?(
    params: ExportRenderServerParamsModel,
  ): Promise<{ pageContext: ExportRenderClientParamsModel }>;

  render(
    params: PageContextBuiltInClientWithServerRouting & ExportRenderClientParamsModel,
  ): Promise<{
    documentHtml: { _template: unknown };
    pageContext: CallablePromiseModel<{ redirectTo?: string } & ExportRenderClientParamsModel>;
  }>;
}
