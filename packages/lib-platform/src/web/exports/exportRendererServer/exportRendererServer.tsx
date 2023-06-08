// import { WEB_CONFIG_STATIC } from '@lib/config/platform/web/web.constants';
// import { RootServer } from '@lib/frontend/root/containers/Root/RootServer';
// import { _exportRendererServer } from '@lib/platform/web/exports/exportRendererServer/_exportRendererServer';
// import type { ExportRendererServerModel } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer.models';

// export const exportRendererServer = (): ExportRendererServerModel =>
//   _exportRendererServer({
//     ...WEB_CONFIG_STATIC,
//     render: ({ children, context }) => <RootServer context={context}>{children}</RootServer>,
//   });

import { WEB_CONFIG_STATIC } from '@lib/config/platform/web/web.constants';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider.ssr';
import { _exportRendererServer } from '@lib/platform/web/exports/exportRendererServer/_exportRendererServer';
import type { ExportRendererServerModel } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer.models';

export const exportRendererServer = (): ExportRendererServerModel =>
  _exportRendererServer({
    ...WEB_CONFIG_STATIC,
    render: ({ children, context }) => (
      <Root
        additionalProviders={[<RouteProvider value={context?.route} />]}
        context={context}>
        {children}
      </Root>
    ),
  });
