import { config } from '#lib-config/core/setup/setup.node';
import { WEB_CONFIG_STATIC } from '#lib-config/platform/web/web.constants';
import { Root } from '#lib-frontend/root/containers/Root/Root.server';
import { renderApp } from '#lib-platform/core/utils/renderApp/renderApp';
import { _exportRendererServer } from '#lib-platform/web/exports/exportRendererServer/_exportRendererServer';
import {
  type ExportRendererServerModel,
  type ExportRenderServerParamsModel,
} from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export const exportRendererServer = ({
  ...params
}: ExportRenderServerParamsModel): ExportRendererServerModel =>
  _exportRendererServer({
    ...params,
    onInitialize: config.onInitialize,
    onShutdown: config.onShutdown,
    publicDir: WEB_CONFIG_STATIC.publicDir,
    render: ({ children, context }) => renderApp({ Root, children, context }),
    rootId: WEB_CONFIG_STATIC.rootId,
    ssrContextKeys: WEB_CONFIG_STATIC.ssrContextKeys,
  });
