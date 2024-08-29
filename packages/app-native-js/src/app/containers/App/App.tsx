import { routes } from '@app/native/routes';
import { type FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { Router } from '@lib/frontend/route/containers/Router/Router';

export const App: FCModel = () => (
  <Root>
    <Router routes={routes} />
  </Root>
);
