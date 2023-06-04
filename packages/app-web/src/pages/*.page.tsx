import { routes } from '@app/web/routes';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Routes } from '@lib/frontend/route/containers/Routes/Routes';
import { exportPage } from '@lib/platform/web/exports/exportPage/exportPage';

const Component: FCModel = () => <Routes routes={routes} />;

const { Page } = exportPage({ Component });

export { Page };
