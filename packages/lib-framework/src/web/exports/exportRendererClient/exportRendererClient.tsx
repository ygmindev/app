import webConfig from '@lib/config/framework/web/web';
import { _exportRendererClient } from '@lib/framework/web/exports/exportRendererClient/_exportRendererClient';
import type { ExportRendererClientModel } from '@lib/framework/web/exports/exportRendererClient/exportRendererClient.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const exportRendererClient = (): ExportRendererClientModel =>
  _exportRendererClient({
    render: ({ children, context }) => <Root context={context}>{children}</Root>,
    rootId: webConfig.rootId,
  });
