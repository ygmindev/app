import { routes } from '#app-web-library/routes';
import { Router } from '#lib-frontend/route/containers/Router/Router';
import { page } from '#lib-platform/web/exports/page/page';

const { Page } = page({ Component: () => <Router routes={routes} /> });

export default Page;
