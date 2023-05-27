import { Root } from '@lib/frontend/root/containers/Root/Root';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import { _exportRendererClient } from '@lib/platform/web/exports/exportRendererClient/_exportRendererClient';
import type { ExportRendererClientModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';

export const exportRendererClient = (): ExportRendererClientModel =>
  _exportRendererClient({
    render: ({ children, context }) => (
      <Root
        additionalProviders={[<RouteProvider value={context?.route} />]}
        context={context}>
        {children}
      </Root>
    ),
  });
