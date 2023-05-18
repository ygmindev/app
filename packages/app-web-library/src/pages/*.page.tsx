import { routes } from '@app/web-library/routes';
import { exportPage } from '@lib/platform/web/exports/exportPage/exportPage';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Router } from '@lib/frontend/route/containers/Router/Router';

const Component: FCModel = () => <Router routes={routes} />;

const { Page } = exportPage({ Component });

export { Page };
