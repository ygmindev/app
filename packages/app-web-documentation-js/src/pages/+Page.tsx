import { config } from '@lib/config/routes/routes.library';
import { type FCModel } from '@lib/frontend/core/core.models';
import { Router } from '@lib/frontend/route/containers/Router/Router';

const { routes } = config.params();

export const Page: FCModel = () => <Router routes={routes} />;
