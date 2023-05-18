import webConfig from '@lib/config/platform/web/web';
import { _exportRendererServer } from 'packages/lib-platform/src/web/exports/exportRendererServer/_exportRendererServer';
import type { ExportRendererServerModel } from '@lib/platformlatform/src/web/exports/exportRendererServer/exportRendererServer.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const exportRendererServer = (): ExportRendererServerModel =>
  _exportRendererServer({
    publicDir: webConfig.publicDir,
    render: ({ children, context }) => <Root context={context}>{children}</Root>,
    rootId: webConfig.rootId,
    ssrContextKeys: webConfig.ssrContextKeys,
  });
