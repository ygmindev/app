import { WEB_CONFIG_STATIC } from '@lib/config/platform/web/web.constants';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import { _exportRendererClient } from '@lib/platform/web/exports/exportRendererClient/_exportRendererClient';
import type { ExportRendererClientModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';

export const exportRendererClient = (): ExportRendererClientModel =>
  _exportRendererClient({
    additionalProviders: (context) => [<RouteProvider value={context?.route} />],
    rootId: WEB_CONFIG_STATIC.rootId,
  });
