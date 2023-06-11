import type { WebConfigModel } from '@lib/config/platform/web/web.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { RenderAppParamsModel } from '@lib/platform/core/utils/renderApp/renderApp.models';
import type { ExportRenderClientParamsModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { PageContextBuiltInClientWithClientRouting } from 'vite-plugin-ssr/types';

export interface _ExportRendererClientParamsModel extends Pick<WebConfigModel, 'rootId'> {
  additionalProviders?: CallableModel<
    RenderAppParamsModel['additionalProviders'],
    RootContextModel
  >;
}

export interface _ExportRendererClientModel {
  render(
    params: PageContextBuiltInClientWithClientRouting & ExportRenderClientParamsModel,
  ): Promise<void>;
}
