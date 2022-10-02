import { adminRoutes } from '@lib/frontend/admin/admin.routes';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { Router } from '@lib/frontend/routing/containers/Router/Router';

export const App: FCModel = () => (
  <Root>
    <Router routes={adminRoutes} />
  </Root>
);
