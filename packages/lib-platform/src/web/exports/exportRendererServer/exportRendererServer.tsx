import webConfig from '@lib/config/platform/web/web';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import type { ExportRendererServerModel } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer.models';
import { _exportRendererServer } from '@lib/platform/web/exports/exportRendererServer/_exportRendererServer';

export const exportRendererServer = (): ExportRendererServerModel =>
  _exportRendererServer({
    publicDir: webConfig.publicDir,
    render: ({ children, context }) => <Root context={context}>{children}</Root>,
    rootId: webConfig.rootId,
    ssrContextKeys: webConfig.ssrContextKeys,
  });
