import { webConfig } from '@lib/config/framework/web/configs/web.config';
import { _exportRendererServer } from '@lib/framework/web/exports/exportRendererServer/_exportRendererServer';
import type { ExportRendererServerModel } from '@lib/framework/web/exports/exportRendererServer/exportRendererServer.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const exportRendererServer = (): ExportRendererServerModel =>
  _exportRendererServer({
    favicoPath: webConfig.favicoPath,
    render: ({ children, initialState, locale, location }) => (
      <Root
        initialState={initialState}
        locale={locale}
        location={location}>
        {children}
      </Root>
    ),
    rootId: webConfig.rootId,
  });
