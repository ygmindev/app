import { routes } from '@app/web/routes';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { exportPage } from '@lib/platform/web/exports/exportPage/exportPage';

const Component: FCModel = () => <Router routes={routes} />;

const { Page } = exportPage({ Component });

export { Page };
