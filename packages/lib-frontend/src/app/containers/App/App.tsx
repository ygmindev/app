import { _App } from '@lib/frontend/app/containers/App/_App';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const App: FCModel = () => (
  <Root>
    <_App />
  </Root>
);
