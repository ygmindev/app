import { Router } from '@lib/frontend/route/containers/Router/Router';
import { page } from '@lib/shared/web/utils/page/page';

import { routes } from '../routes';

export default page({ Component: () => <Router routes={routes} /> });
