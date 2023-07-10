import { routes } from '#app-web/routes';
import { exportPrerenderPages } from '#lib-platform/web/exports/exportPrerenderPages/exportPrerenderPages';

const { prerenderPages } = exportPrerenderPages({ routes });

export default prerenderPages;
