import { WEB_CONFIG_STATIC } from '#lib-config/platform/web/web.constants';
import { RouteProvider } from '#lib-frontend/route/providers/RouteProvider/RouteProvider';
import { renderApp } from '#lib-platform/core/utils/renderApp/renderApp';
import { _exportRendererClient } from '#lib-platform/web/exports/exportRendererClient/_exportRendererClient';
import type {
  ExportRendererClientModel,
  ExportRendererClientParamsModel,
} from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';

export const exportRendererClient = ({
  ...params
}: ExportRendererClientParamsModel): ExportRendererClientModel =>
  _exportRendererClient({
    ...params,
    render: ({ children, context }) =>
      renderApp({
        additionalProviders: [(contextF) => <RouteProvider value={contextF?.route} />],
        children,
        context,
      }),
    rootId: WEB_CONFIG_STATIC.rootId,
  });
