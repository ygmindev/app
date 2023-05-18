import webConfig from '@lib/config/platform/web/web';
import { _exportRendererClient } from 'packages/lib-platform/src/web/exports/exportRendererClient/_exportRendererClient';
import type { ExportRendererClientModel } from '@lib/platformlatform/src/web/exports/exportRendererClient/exportRendererClient.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const exportRendererClient = (): ExportRendererClientModel =>
  _exportRendererClient({
    render: ({ children, context }) => <Root context={context}>{children}</Root>,
    rootId: webConfig.rootId,
  });
