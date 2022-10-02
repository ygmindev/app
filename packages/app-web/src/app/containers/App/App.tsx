import { appRoutes } from '@lib/frontend/app/app.routes';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { Router } from '@lib/frontend/routing/containers/Router/Router';

export const App: FCModel = () => (
  <Root>
    <Router routes={appRoutes} />
  </Root>
);
