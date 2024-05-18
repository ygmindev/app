import { routes } from '@app/web-admin/routes';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { page } from '@lib/shared/web/utils/page/page';

export default page({ Component: () => <Router routes={routes} /> });
