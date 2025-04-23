import { type FCModel } from '@lib/frontend/core/core.models';
import { Router } from '@lib/frontend/route/containers/Router/Router';

import { routes } from '../routes';

export const Page: FCModel = () => {
  return <Router routes={routes} />;
};
