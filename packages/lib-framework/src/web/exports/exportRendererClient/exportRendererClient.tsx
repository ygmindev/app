import { webConfig } from '@lib/config/framework/web/configs/web.config';
import { _exportRendererClient } from '@lib/framework/web/exports/exportRendererClient/_exportRendererClient';
import type { ExportRendererClientModel } from '@lib/framework/web/exports/exportRendererClient/exportRendererClient.models';

export const exportRendererClient = (): ExportRendererClientModel =>
  _exportRendererClient({ rootId: webConfig.rootId });
