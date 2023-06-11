import { WEB_CONFIG_STATIC } from '@lib/config/platform/web/web.constants';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider.ssr';
import { _exportRendererServer } from '@lib/platform/web/exports/exportRendererServer/_exportRendererServer';
import type { ExportRendererServerModel } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer.models';

export const exportRendererServer = (): ExportRendererServerModel =>
  _exportRendererServer({
    ...WEB_CONFIG_STATIC,
    additionalProviders: (context) => [<RouteProvider value={context?.route} />],
  });
