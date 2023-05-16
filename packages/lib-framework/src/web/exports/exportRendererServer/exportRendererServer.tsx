import webConfigParams from '@lib/config/framework/web/params/web.params';
import { _exportRendererServer } from '@lib/framework/web/exports/exportRendererServer/_exportRendererServer';
import type { ExportRendererServerModel } from '@lib/framework/web/exports/exportRendererServer/exportRendererServer.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const exportRendererServer = (): ExportRendererServerModel =>
  _exportRendererServer({
    publicDir: webConfigParams.publicDir,
    render: ({ children, context }) => <Root context={context}>{children}</Root>,
    rootId: webConfigParams.rootId,
    ssrContextKeys: webConfigParams.ssrContextKeys,
  });
