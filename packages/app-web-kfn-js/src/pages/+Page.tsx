import 'reflect-metadata';

import { type FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';

import { routes } from '../config/routes';

export const Page: FCModel = () => {
  const context = useRootContext();
  return (
    <Root
      context={context}
      routes={routes}
    />
  );
};
