import { routes } from '@app/native/routes';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';

export const App: FCModel = () => (
  <Root additionalProviders={[(context) => <RouteProvider value={context?.route} />]}>
    <Router routes={routes} />
  </Root>
);
