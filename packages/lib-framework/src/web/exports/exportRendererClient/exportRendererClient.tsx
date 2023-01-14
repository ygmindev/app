import { webConfig } from '@lib/config/framework/web/configs/web.config';
import { _exportRendererClient } from '@lib/framework/web/exports/exportRendererClient/_exportRendererClient';
import type { ExportRendererClientModel } from '@lib/framework/web/exports/exportRendererClient/exportRendererClient.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const exportRendererClient = (): ExportRendererClientModel =>
  _exportRendererClient({
    render: ({ children, initialState, locale }) => (
      <Root
        initialState={initialState}
        locale={locale}>
        {children}
      </Root>
    ),
    rootId: webConfig.rootId,
  });
