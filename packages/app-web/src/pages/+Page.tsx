import { routes } from '@app/web/routes';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { page } from '@lib/platform/web/exports/page/page';

export default page({ Component: () => <Router routes={routes} /> });
