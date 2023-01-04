import { webConfig } from '@lib/config/framework/web/configs/web.config';
import { _exportRendererServer } from '@lib/framework/web/exports/exportRendererServer/_exportRendererServer';
import type { ExportRendererServerModel } from '@lib/framework/web/exports/exportRendererServer/exportRendererServer.models';

export const exportRendererServer = (): ExportRendererServerModel =>
  _exportRendererServer({
    favicoPath: webConfig.favicoPath,
    rootId: webConfig.rootId,
  });
