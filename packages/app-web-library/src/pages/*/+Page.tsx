import { routes } from '#app-web-library/routes';
import { Router } from '#lib-frontend/route/containers/Router/Router';
import { exportPage } from '#lib-platform/web/exports/exportPage/exportPage';

const { Page } = exportPage({ Component: () => <Router routes={routes} /> });

export default Page;
