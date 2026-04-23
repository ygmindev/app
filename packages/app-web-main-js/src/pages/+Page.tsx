import { type FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';

import { routesConfig } from '../config/routes';

const routes = routesConfig.config();

export const Page: FCModel = () => {
  const context = useRootContext();
  return (
    <Root
      context={context}
      routes={routes}
    />
  );
};
